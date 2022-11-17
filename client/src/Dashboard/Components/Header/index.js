import React from "react";
import { Col, Container, Row } from "reactstrap";
import Account from "./Account";
import Logo from "./Logo";
import Search from "./Search";
import Site from "./Site";
import { Headerr, HeaderWrapper, Left, Right, SearchWrapper } from "./Styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Headerr>
        <Container fluid>
          <Row>
            <Col md="5">
              <Left>
                <Logo />
                <Site />
              </Left>
            </Col>
            <Col md="7">
              <Right>
                <Search />
                <Account />
              </Right>
            </Col>
          </Row>
        </Container>
      </Headerr>
    </HeaderWrapper>
  );
};

export default Header;
