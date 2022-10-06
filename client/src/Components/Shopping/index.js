import { useSelector, useDispatch } from "react-redux";

import Layout from "../../Pages/Layout";
import { BsFillCartFill } from "react-icons/bs";
import BreadCrumb from "../../Components/Shared/BreadCrumb/";
import { Container, Row, Col } from "react-bootstrap";
import Table from "../../Components/Shared/Tabel/Table";
import {
  ItemEmpty,
  ItemEmptyIcon,
  ItemEmptyText,
  AddItem,
} from "../../Pages/Wishlist/Styles";
import { addCartItems } from "../../feature/reducer/addToCart";
import { Wrapper } from "../../Components/Shared/Styles/styles";
import { useEffect } from "react";
import ShoppingUpdate from "./ShoppingUpdate";
import Tax from "./Tax";
import GrandTotal from "./GrandTotal";
import { Cart } from "./Styles";
import Coupon from "./Coupon";

const Shopping = () => {
  const { lists } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    const cart = localStorage.getItem("cart_Items")
      ? JSON.parse(localStorage.getItem("cart_Items"))
      : null;

    if (cart) {
      dispatch(addCartItems(cart));
    }
  }, [dispatch]);

  return (
    <Layout>
      <BreadCrumb pathName="cart" />

      <Wrapper>
        {/* If Wishlist is empty! */}
        {lists.items.length === 0 && (
          <ItemEmpty>
            <ItemEmptyIcon>
              <BsFillCartFill />
            </ItemEmptyIcon>
            <ItemEmptyText>No items found in Cart </ItemEmptyText>
            <AddItem to={"/"}>Add Items</AddItem>
          </ItemEmpty>
        )}

        {/* Shopping cart Tabel */}

        <Container>
          {lists && lists.items.length !== 0 && <Table data={lists} />}
        </Container>

        {/* Shopping Update  */}
        {lists.items.length !== 0 && (
          <Container className="my-5">
            <ShoppingUpdate />
          </Container>
        )}

        {lists.items.length !== 0 && (
          <Container>
            <Row>
              <Col className="col-lg-4">
                <Tax />
              </Col>
              <Col className="col-lg-4">
                <Coupon />
              </Col>
              <Col className="col-lg-4">
                <GrandTotal />
              </Col>
            </Row>
          </Container>
        )}
      </Wrapper>
    </Layout>
  );
};

export default Shopping;
