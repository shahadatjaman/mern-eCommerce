// Data
import { footerMenu } from "./data";

// Styled Components
import { Container, Row, Col } from "../../Styles/Gride";
import { FooterWrapper, H4, Li, Text, Ul } from "./styles";
import { H3 } from "../Header/styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col lg_width="20">
            <H3>Flone.</H3>
            <Text>© 2022 Flone. All Rights Reserved</Text>
          </Col>
          {footerMenu?.map((menu, index) => (
            <Col lg_width="20" key={index}>
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
