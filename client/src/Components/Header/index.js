//<=== Hooks ====>
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

//<=== Reducer functions  ====>
import { addcartTotal } from "../../feature/reducer/addToCart";
import { addWishList } from "../../feature/reducer/wishList";

//<=== Styled Components ====>
import {
  H3,
  Header,
  HeaderRightWrapper,
  Li,
  Logo,
  MainMenu,
  Link,
  Ul,
  Icon,
  HeaderWrapper,
  Count,
  Img,
} from "./styles";
import { Col, Container, Row } from "react-bootstrap";

//<===  React Icons ===>
import {
  AiOutlineSearch,
  AiOutlineUserAdd,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const menuList = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Shop",
      link: "#",
    },
    {
      name: "Colection",
      link: "#",
    },
    {
      name: "Pages",
      link: "#",
    },
    {
      name: "Contuct Us",
      link: "#",
    },
  ];

  const { lists } = useSelector((state) => state.wishList);

  const { total } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wistList"));

    if (wishlist) {
      dispatch(addWishList(wishlist));
    }
  }, [dispatch]);

  useEffect(() => {
    const cartList = JSON.parse(localStorage.getItem("cartTotal"))
      ? JSON.parse(localStorage.getItem("cartTotal"))
      : null;

    if (cartList) {
      dispatch(addcartTotal(cartList));
    }
  }, [dispatch]);

  // Sticky Header
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const height = Math.floor(window.scrollY);
      console.log(height);
    });
  }, []);
  return (
    <HeaderWrapper>
      <Container>
        <Row>
          <Col>
            <Header>
              <Logo>
                <NavLink to={"/"}>
                  {/* <H3>Flone.</H3> */}
                  <Img
                    src="https://res.cloudinary.com/dza2t1htw/image/upload/v1665039683/me_yb2uww.png"
                    alt="logo"
                  />
                </NavLink>
              </Logo>
              <MainMenu>
                <Ul>
                  {menuList.map((menu, index) => (
                    <Li key={index}>
                      <Link to="/">{menu.name}</Link>
                    </Li>
                  ))}
                </Ul>
              </MainMenu>
              <HeaderRightWrapper>
                <Icon>
                  <AiOutlineSearch />
                </Icon>
                <Icon>
                  <AiOutlineUserAdd />
                </Icon>

                <Icon>
                  <Count>0</Count>
                  <FontAwesomeIcon icon={faShuffle} />
                </Icon>
                <NavLink to={"/wishlist"}>
                  <Icon>
                    <Count>{lists.items.length}</Count>
                    <AiOutlineHeart />
                  </Icon>
                </NavLink>

                <NavLink to={"/cartitems"}>
                  <Icon>
                    {total ? <Count>{total.totalQty}</Count> : <Count>0</Count>}

                    <AiOutlineShoppingCart />
                  </Icon>
                </NavLink>
              </HeaderRightWrapper>
            </Header>
          </Col>
        </Row>
      </Container>
    </HeaderWrapper>
  );
};

export default NavBar;
