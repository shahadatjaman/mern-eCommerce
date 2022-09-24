//import { NavLink } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineUserAdd,
  AiOutlineSync,
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
} from "./styles";

import { Container } from "../../Styles/Gride";

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
  return (
    <HeaderWrapper>
      <Container fluid>
        <Header>
          <Logo>
            <H3>CMS.</H3>
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
              <AiOutlineSync />
            </Icon>
            <Icon>
              <AiOutlineHeart />
            </Icon>
            <Icon>
              <AiOutlineShoppingCart />
            </Icon>
          </HeaderRightWrapper>
        </Header>
      </Container>
    </HeaderWrapper>
  );
};

export default NavBar;
