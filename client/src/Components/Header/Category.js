import { Col, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { AiOutlineDown } from "react-icons/ai";
import { CgFormatLeft } from "react-icons/cg";
import {
  CategoriesWrapper,
  Categries,
  LinkName,
  NabvarToggle,
  NavLinks,
} from "./Styles";
import { useWindowWidth } from "../../hooks/userWindowWidth";
const Headercategories = () => {
  const isFluid = useWindowWidth({ width: 1400 });

  return (
    <CategoriesWrapper>
      <Navbar expand={false}>
        <Container fluid={isFluid}>
          <Col>
            <Categries>
              <NabvarToggle aria-controls="offcanvasNavbar">
                <CgFormatLeft />
                <span>ALL CATEGORIES</span>
              </NabvarToggle>

              <NavLinks>
                <LinkName to="/">Factories</LinkName>
                <LinkName to="/">Officials Shops</LinkName>
                <LinkName to="/">
                  Made In Africa
                  <AiOutlineDown />
                </LinkName>
                <LinkName to="/">
                  Trade Services
                  <AiOutlineDown />
                </LinkName>
                <LinkName to="/">
                  Source on Anaizan.com
                  <AiOutlineDown />
                </LinkName>
                <LinkName to="/">
                  Sell on Anaizan
                  <AiOutlineDown />
                </LinkName>
              </NavLinks>
            </Categries>
          </Col>
        </Container>
      </Navbar>
    </CategoriesWrapper>
  );
};

export default Headercategories;
