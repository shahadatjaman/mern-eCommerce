import { Col, Container, Form, Navbar } from "react-bootstrap";
import Input from "../Shared/Form/Input";
import RightContent from "./RightContent";
import { CgFormatLeft } from "react-icons/cg";
import { HeaderWrapper, Logo, NavbarBrand, Toggler } from "./Styles";

import { useWindowHeight } from "../../hooks/useWindowHeight";
import { useWindowWidth } from "../../hooks/userWindowWidth";
import { NavLink } from "react-router-dom";

const Header = () => {
  const isMatched = useWindowHeight({ height: 400 });

  const isMatchedWidth = useWindowWidth({ width: 768 });

  const isFluid = useWindowWidth({ width: 1400 });

  return (
    <HeaderWrapper isSticky={isMatched}>
      <Navbar expand="lg" className="border-bottom">
        <Container fluid={isFluid}>
          <NavbarBrand href="#">
            <Toggler>
              <i className="fa-solid fa-bars"></i>
            </Toggler>
            <Logo>
              <NavLink to="/">Xpart</NavLink>
            </Logo>
          </NavbarBrand>
          <Form className="d-flex position-relative w-50 lef-0">
            <Input
              mb="0"
              width="100"
              searchWidth={isMatchedWidth ? "14" : "5"}
              radius="50"
              search="true"
              placeHolder="No description, website, or topics provided."
            />
          </Form>
          <RightContent />
        </Container>
      </Navbar>
    </HeaderWrapper>
  );
};

export default Header;
