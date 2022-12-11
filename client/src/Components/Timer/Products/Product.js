import { Rating } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { callApi, shortText } from "../../../utils";
import { Caption, H5, Img, ImgWrapper, P } from "../Styles";

const Product = ({ product }) => {
  const [variation, setVariation] = useState(null);
  const [totalRating, setTotalRating] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await callApi({
        _id: product._id,
        pathOne: "vendor",
        pathTwo: "getvariation",
        method: "get",
      });
      if (res.variation) {
        setVariation(res.variation);
      }
      if (res.totalRating) {
        setTotalRating(res.totalRating);
      }
    })();
  }, [product]);

  return (
    <Col className="col-4">
      <ImgWrapper>
        {variation && (
          <Link to={`/product/${product._id}`}>
            <Img src={variation.variation_img} alt="mobile" />
          </Link>
        )}
      </ImgWrapper>

      <Caption>
        <H5>
          <Link to={`/product/${product._id}`}>
            {shortText(product.name, 20, 0, 18)}
          </Link>
          {/* {product.name} */}
        </H5>

        {totalRating ? (
          <>
            <Rating
              size="small"
              name="read-only"
              value={totalRating}
              readOnly
            />
            ({totalRating})
          </>
        ) : (
          <>
            <Rating size="small" name="disabled" value={totalRating} disabled />
            ( 0)
          </>
        )}
      </Caption>
    </Col>
  );
};

export default Product;
