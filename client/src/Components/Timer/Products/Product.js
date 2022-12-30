import { Box, Rating, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { callApi, shortText } from "../../../utils";

import { Img, ImgWrapper } from "../Styles";

const Product = ({ product }) => {
  const [variation, setVariation] = useState(null);
  const [totalRating, setTotalRating] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await callApi({
        _id: product._id,
        pathOne: "v1",
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

      <Box my={2}>
        <Typography variant="body2" fontWeight={600}>
          <Link to={`/product/${product._id}`}>
            {shortText(product.name, 15, 0, 10)}
          </Link>
        </Typography>

        {totalRating ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Rating
              size="small"
              name="read-only"
              value={totalRating}
              readOnly
            />
            <Typography fontWeight={600}>({totalRating})</Typography>
          </Box>
        ) : (
          <Box mt={1}>
            <Rating size="small" name="disabled" value={totalRating} disabled />
            ( 0)
          </Box>
        )}
        <Box>
          {product && product.price && (
            <Typography>$ {product.price.$numberDecimal}</Typography>
          )}
        </Box>
      </Box>
    </Col>
  );
};

export default Product;
