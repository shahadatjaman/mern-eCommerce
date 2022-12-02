// Hooks
import { useSelector, useDispatch } from "react-redux";

// Reducer functions
import { clearCart } from "../../feature/reducer/wishList";

// Components
import Layout from "../Layout";
import BreadCrumb from "../../Components/Shared/BreadCrumb";
import Tabel from "../../Components/Shared/Tabel/Table";

// Styled Components
import {
  AddItem,
  Button,
  CartMain,
  Img,
  ImgWrapper,
  ItemEmpty,
  ItemEmptyIcon,
  ItemEmptyText,
  ShoppingUpdate,
  Wrapper,
} from "./Styles";
import { Col, Container, Row } from "react-bootstrap";

// React Icons
import { AiOutlineHeart } from "react-icons/ai";

const Wishlist = () => {
  const { lists } = useSelector((state) => state.wishList);

  const dispatch = useDispatch();

  const cleareCartItems = () => {
    dispatch(clearCart());
  };

  return (
    <Layout>
      <Wrapper>
        <BreadCrumb pathName="wishlist" />
        <CartMain>
          {/* If Wishlist is empty! */}
          {lists.items.length === 0 && (
            <ItemEmpty>
              <ImgWrapper>
                <Img
                  src="https://res.cloudinary.com/dza2t1htw/image/upload/v1669295344/shopping-cart_f2vetc.png"
                  alt="img"
                />
              </ImgWrapper>
              <ItemEmptyText>No items found in wishlist</ItemEmptyText>
              <AddItem to={"/"}>Add Items</AddItem>
            </ItemEmpty>
          )}

          <Container>
            {/* if wishList is not empty */}
            {lists.items.length !== 0 && <Tabel data={lists} />}

            {lists.items.length !== 0 && (
              <Row>
                <Col>
                  <ShoppingUpdate>
                    <Button>CONTINUE SHOPPING</Button>
                    <Button onClick={cleareCartItems}>CLEAR WISHLIST</Button>
                  </ShoppingUpdate>
                </Col>
              </Row>
            )}
          </Container>
        </CartMain>
      </Wrapper>
    </Layout>
  );
};

export default Wishlist;
