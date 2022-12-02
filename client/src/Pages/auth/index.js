import React from "react";
import Layout from "../Layout";
import { Outlet } from "react-router-dom";
import { Wrapper } from "../../Components/Shared/Styles/styles";

import { Container, Row, Col } from "reactstrap";
import { Link, Tab } from "./Styles";

const Auth = () => {
  return (
    <Layout>
      <Wrapper>
        <Container>
          <Row>
            <Col className="col-lg-7 col-md-12 ml-auto mr-auto">
              <Tab>
                <Link to={`/login`} isActive={({ isActive }) => isActive}>
                  login
                </Link>{" "}
                |
                <Link to={`/register`} isActive={({ isActive }) => isActive}>
                  register
                </Link>
              </Tab>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default Auth;
