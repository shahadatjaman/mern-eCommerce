import { Col, Container, Navbar } from "react-bootstrap";
import { AiOutlineDown } from "react-icons/ai";
import { CategoriesWrapper, Categries, LinkName, NavLinks } from "./Styles";
import { useWindowWidth } from "../../hooks/userWindowWidth";
const Headercategories = () => {
  const isFluid = useWindowWidth({ width: 1400 });

  return (
    <CategoriesWrapper>
      <Navbar expand={false}>
        <Container fluid={isFluid}>
          <Col>
            <Categries>
              <NavLinks>
                <LinkName to="/">Factories</LinkName>
                <LinkName to="/">Officials Shops</LinkName>
                <LinkName to="/">
                  Made In Bangladesh
                  <AiOutlineDown />
                </LinkName>
                <LinkName to="/">
                  Trade Services
                  <AiOutlineDown />
                </LinkName>
                <LinkName to="/">
                  Source on Xpart.com
                  <AiOutlineDown />
                </LinkName>
                <LinkName to="/">
                  Sell on Xpart
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
