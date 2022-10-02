import {
  DescReview,
  InfoKey,
  List,
  Lists,
  NavPills,
  ProductInfo,
} from "./Styles";

import { Container, Tab, Tabs } from "react-bootstrap";

const DescriptionReview = ({ data }) => {
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
