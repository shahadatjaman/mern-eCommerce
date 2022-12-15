import { Rating } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { callApi } from "../../../../utils";

import { Wrapper, Caption, FeatureShop, Img, ImgWrapper } from "./Styles";

const FeatureProdcut = ({ value }) => {
  const [variation, setVariation] = useState(null);
  const [totalRating, setTotalRating] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await callApi({
        _id: value._id,
        pathOne: "vendor",
        pathTwo: "getvariation",
        method: "get",
      });

      setVariation(res.variation);
      if (res.totalRating) {
        setTotalRating(res.totalRating);
      }
    })();
  }, [value]);

  return (
    <Wrapper>
      <FeatureShop>
        <Row>
          <Col className="col-xxl-6 col-md-12 col-sm-6 col-6">
            <Link to={`/product/${value._id}`}>
              <ImgWrapper>
                {variation && (
                  <Img src={variation.variation_img} alt="laptop" />
                )}
              </ImgWrapper>
            </Link>
          </Col>
          <Col className="col-xxl-6 col-md-12 col-sm-6 col-6">
            <Caption>
              <Link to={`/product/${value._id}`}>
                <h6>{value.name}</h6>
              </Link>

              {totalRating ? (
                <>
                  <Rating name="read-only" value={totalRating} readOnly />(
                  {totalRating} )
                </>
              ) : (
                <Rating name="disabled" value={0} disabled />
              )}

              <h4>$ {parseFloat(value.price.$numberDecimal).toFixed(2)}</h4>
            </Caption>
          </Col>
        </Row>
      </FeatureShop>
    </Wrapper>
  );
};

export default FeatureProdcut;
