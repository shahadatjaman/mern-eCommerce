// Data
import { footerMenu } from "./data";

// Styled Components
import { Container, Row, Col } from "reactstrap";
import { FooterWrapper, H4, Li, Text, Ul } from "./styles";
import { H3 } from "../Header/styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col md="3">
            <H3>Flone.</H3>
            <Text>© 2022 Flone. All Rights Reserved</Text>
          </Col>
          {footerMenu?.map((menu, index) => (
            <Col md="2" key={index}>
              <H4>{menu.name}</H4>
              <Ul>
                {menu.menu?.map((item, index) => (
                  <Li key={index}>{item.name}</Li>
                ))}
              </Ul>
            </Col>
          ))}
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
