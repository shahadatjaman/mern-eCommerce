import { useDispatch, useSelector } from "react-redux";
//import { NavLink } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineUserAdd,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
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
} from "./styles";

import { Container } from "../../Styles/Gride";
import { addWishList } from "../../feature/reducer/wishList";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { cartTotal } from "../../feature/reducer/addToCart";

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
      dispatch(cartTotal(cartList));
    }
  }, [dispatch]);

  return (
    <HeaderWrapper>
      <Container fluid>
        <Header>
          <Logo>
            <NavLink to={"/"}>
              <H3>Flone.</H3>
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
                {total && <Count>{total.totalQty}</Count>}

                <AiOutlineShoppingCart />
              </Icon>
            </NavLink>
          </HeaderRightWrapper>
        </Header>
      </Container>
    </HeaderWrapper>
  );
};

export default NavBar;
