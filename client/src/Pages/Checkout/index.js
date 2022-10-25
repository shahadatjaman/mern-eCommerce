import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../Components/Shared/BreadCrumb";
import { getUserAddress } from "../../feature/reducer/user";
import Layout from "../Layout";
import Tab from "./Tab";

const Checkout = () => {
  const { isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAddress());
  }, [dispatch]);
  return (
    <Layout>
      <BreadCrumb pathName="Checkout" />

      <Container>
        <Row xs="2">
          <Col className="offset-md-2" md="8" sm="12">
            <Tab />
          </Col>
        </Row>
      </Container>
      {!isLoading && <Outlet />}
    </Layout>
  );
};

export default Checkout;
