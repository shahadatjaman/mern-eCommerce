import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

import {
  Wrapper,
  Caption,
  FeatureShop,
  Img,
  ImgWrapper,
  Li,
  Ul,
} from "./Styles";

const FeatureProdcut = () => {
  return (
    <Wrapper>
      <FeatureShop>
        <Row>
          <Col className="col-xxl-6 col-md-12 col-sm-6 col-6">
            <ImgWrapper>
              <Img
                src={
                  "https://res.cloudinary.com/dza2t1htw/image/upload/v1668921469/camera.cf8f7d729e14f4cd8e54_ni0gb4.png"
                }
                alt="laptop"
              />
            </ImgWrapper>
          </Col>
          <Col className="col-xxl-6 col-md-12 col-sm-6 col-6">
            <Caption>
              <h6>Notebook Black spire Nitro VN7-591G</h6>
              <Ul>
                <Li>
                  <FaStar />
                </Li>
                <Li>
                  <FaStar />
                </Li>
                <Li>
                  <FaStar />
                </Li>
                <Li>
                  <FaStar />
                </Li>
              </Ul>
              <h4>24900.00 CFA</h4>
            </Caption>
          </Col>
        </Row>
      </FeatureShop>
    </Wrapper>
  );
};

export default FeatureProdcut;
