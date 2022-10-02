import { useSelector, useDispatch } from "react-redux";

import Layout from "../Layout";
import { BsFillCartFill } from "react-icons/bs";
import BreadCrumb from "../../Components/Shared/Components/BreadCrumb/";
import { Container } from "react-bootstrap";
import Table from "../../Components/Shared/Components/Tabel/Table";
import {
  ItemEmpty,
  ItemEmptyIcon,
  ItemEmptyText,
  AddItem,
} from "../Wishlist/Styles";
import { addCartItems } from "../../feature/reducer/addToCart";
import { Wrapper } from "../../Components/Shared/Styles/styles";
import { useEffect } from "react";
const Cart = () => {
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
        <Container>
          {lists && lists.items.length !== 0 && <Table data={lists} />}
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default Cart;
