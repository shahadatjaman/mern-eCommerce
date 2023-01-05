import { Container, Row, Col } from "reactstrap";

import { Item, Items, TextOne, TextTwo, Wrapper, Text, Img } from "./styles";

const Support = () => {
  const supprtData = [
    {
      textOne: "Free Shipping",
      textTwo: "Free shipping on all order",
      img: "https://flone.jamstacktemplates.dev/assets/img/icon-img/support-1.png",
    },
    {
      textOne: "Support 24/7",
      textTwo: "Free shipping on all order",
      img: "https://flone.jamstacktemplates.dev/assets/img/icon-img/support-2.png",
    },
    {
      textOne: "Money Return",
      textTwo: "FFree shipping on all order",
      img: "https://flone.jamstacktemplates.dev/assets/img/icon-img/support-3.png",
    },
    {
      textOne: "Order Discount",
      textTwo: "Free shipping on all order",
      img: "https://flone.jamstacktemplates.dev/assets/img/icon-img/support-4.png",
    },
  ];

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col className="col-lg-100">
            <Items>
              {supprtData?.map((item, index) => (
                <Item key={index}>
                  <Img src={item.img} />
                  <Text>
                    <TextOne>{item.textOne}</TextOne>
                    <TextTwo>{item.textTwo}</TextTwo>
                  </Text>
                </Item>
              ))}
            </Items>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Support;
