import {
  DescReview,
  InfoKey,
  List,
  Lists,
  NavPills,
  ProductInfo,
} from "../styles";

import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";

import { products } from "../data";

const DescriptionReview = ({ data }) => {
  const { materials, otherinfo } = products.shipping;

  return (
    <DescReview>
      <Container>
        <NavPills>
          <Tabs
            defaultActiveKey="description"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Additional Information">
              <ProductInfo>
                <Lists>
                  <List>
                    <InfoKey>Weight</InfoKey>
                    {data.options.weight} g
                  </List>
                  <List>
                    <InfoKey>Dimensions</InfoKey>
                    {data.options.dimensions.w} x {data.options.dimensions.h} x{" "}
                    {data.options.dimensions.l} cm
                  </List>
                  <List>
                    <InfoKey>Materials</InfoKey>
                    {materials}
                  </List>
                  <List>
                    <InfoKey>Other Info</InfoKey>
                    {otherinfo}
                  </List>
                  <List></List>
                </Lists>
              </ProductInfo>
            </Tab>
            <Tab eventKey="description" title="Description">
              {data.long_description}
            </Tab>
            <Tab eventKey="contact" title=" Reviews(1)">
              Reviews(1)
            </Tab>
          </Tabs>
        </NavPills>
      </Container>
    </DescReview>
  );
};

export default DescriptionReview;
