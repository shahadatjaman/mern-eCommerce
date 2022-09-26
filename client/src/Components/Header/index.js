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

  const dispatch = useDispatch();

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wistList"));

    if (wishlist) {
      dispatch(addWishList(wishlist));
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
                <Count>{lists.length}</Count>
                <AiOutlineHeart />
              </Icon>
            </NavLink>

            <Icon>
              <Count>0</Count>
              <AiOutlineShoppingCart />
            </Icon>
          </HeaderRightWrapper>
        </Header>
      </Container>
    </HeaderWrapper>
  );
};

export default NavBar;
