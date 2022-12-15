import { Button, Col, Container, FormControl, Row } from "react-bootstrap";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import {
  menuFive,
  menuFour,
  menuOne,
  MenuOne,
  menuSaven,
  menuSix,
  menuThree,
  menuTwo,
  policy,
} from "./data";
import {
  AppStore,
  CopyRight,
  FooterInfo,
  FooterWrapper,
  Form,
  Icons,
  Img,
  Info,
  Language,
  Li,
  List,
  Lists,
  MarketPlace,
  PlayStore,
  PolicyList,
  SearchBar,
  SocialIcons,
  SocialWrapper,
  Turner,
  Ul,
  Wrapper,
} from "./styles";

import Input from "../Shared/Form/Input";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <FooterWrapper>
          <Row>
            <Col>
              <SearchBar>
                <Form>
                  <Input
                    searchWidth="10"
                    radius="50"
                    width="100"
                    search={true}
                    placeHolder="Your Email Address"
                    bg="#1f2c3aba"
                  />
                </Form>
                <p>
                  Trade Alert: Delivering the latest product trends and industry
                  straight to your inbox
                </p>
              </SearchBar>
            </Col>
          </Row>
          <FooterInfo>
            <Row>
              <Col className="col-lg-8 col-md-8 col-12 mt-5">
                <Row>
                  <Col className="col-lg-4">
                    <Info>
                      <h5>Get to Know Us </h5>

                      {menuOne.map((item, index) => (
                        <Ul key={index}>
                          <Li key={index}>{item.name}</Li>
                        </Ul>
                      ))}
                    </Info>
                  </Col>
                  <Col className="col-lg-4">
                    <Info>
                      <h5> Sell on Anaizan.com </h5>
                      <Ul>
                        {menuTwo.map((item, index) => (
                          <Li key={index}>{item.name}</Li>
                        ))}
                      </Ul>
                    </Info>
                  </Col>
                  <Col className="col-lg-4">
                    <Info>
                      <h5>Customer Services</h5>

                      <Ul>
                        {menuThree.map((item, index) => (
                          <Li key={index}>{item.name}</Li>
                        ))}
                      </Ul>
                    </Info>
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col className="col-lg-4">
                    <Info>
                      <h5> Make Money with Us</h5>

                      <Ul>
                        {menuFour.map((item, index) => (
                          <Li key={index}>{item.name}</Li>
                        ))}
                      </Ul>
                    </Info>
                  </Col>
                  <Col className="col-lg-4">
                    <Info>
                      <h5>Source on Xpart.com </h5>

                      <Ul>
                        {menuFive.map((item, index) => (
                          <Li key={index}>{item.name}</Li>
                        ))}
                      </Ul>
                    </Info>
                  </Col>
                  <Col className="col-lg-4">
                    <Info>
                      <h5>Trade Services </h5>

                      <Ul>
                        {menuSix.map((item, index) => (
                          <Li key={index}>{item.name}</Li>
                        ))}
                      </Ul>
                    </Info>
                  </Col>
                </Row>
              </Col>
              <Col className="col-lg-4 col-md-4 col-12 mt-5">
                <Info>
                  <h5>Useful Links </h5>
                  <Ul>
                    {menuSaven.map((item, index) => (
                      <Li key={index}>{item.name}</Li>
                    ))}
                  </Ul>
                </Info>
              </Col>
            </Row>
          </FooterInfo>
        </FooterWrapper>
      </Container>

      <SocialWrapper>
        <Container>
          <Turner></Turner>
          <Row className="my-5">
            <Col className="col-lg-2">
              <h5>Télécharger:</h5>
              <MarketPlace>
                <PlayStore>
                  <Img
                    src={
                      "https://res.cloudinary.com/dza2t1htw/image/upload/v1669185798/playstore_vsegx4.png"
                    }
                    alt="playStore"
                  />
                </PlayStore>
                <AppStore>
                  <Img
                    src={
                      "https://res.cloudinary.com/dza2t1htw/image/upload/v1669185775/appstore_xlfgee.png"
                    }
                    alt="appStore"
                  />
                </AppStore>
              </MarketPlace>
            </Col>
            <Col className="col-lg-8">
              <PolicyList>
                <Lists>
                  {policy.map((item, index) => (
                    <List key={index}>{item.name}</List>
                  ))}
                </Lists>
              </PolicyList>
              <Language>
                <p>
                  Xpart.com Español - Português - Deutsch - Français - Italiano
                  - Pусский - 한국어 - 日本語 - ภาษาไทย - Türk - Nederlands -
                  tiếng Việt - Indonesian
                </p>
              </Language>
            </Col>
            <Col className="col-lg-2">
              <SocialIcons>
                <h5>Suivez nous sur:</h5>
                <Icons>
                  <FaFacebookSquare />
                  <FaInstagram />
                  <FaLinkedin />
                  <FaTwitterSquare />
                </Icons>
              </SocialIcons>
            </Col>
          </Row>
        </Container>
      </SocialWrapper>

      <CopyRight>
        <Container>
          <p>Copyright © 2021 Xpart. All rights reserved.</p>
          <p>
            Privacy / Terms of use / Cookie preferences / Protect my personal
            data / AdChoices
          </p>
        </Container>
      </CopyRight>
    </Wrapper>
  );
};

export default Footer;
