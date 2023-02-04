import { Box, Rating, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { callApi, shortText } from "../../../utils";

import { Img, ImgWrapper } from "../Styles";

const Product = ({ product }) => {
  return (
    <Col className="col-4">
      <ImgWrapper>
        <Link to={`/product/${product._id}`}>
          <Img src={product.variation[0]?.variation_img} alt={product.name} />
        </Link>
      </ImgWrapper>

      <Box my={2}>
        <Typography variant="body2" fontWeight={600}>
          <Link to={`/product/${product._id}`}>
            {shortText(product.name, 15, 0, 10)}
          </Link>
        </Typography>

        {product.tot_rating ? (
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
              value={product.tot_rating}
              readOnly
            />
            <Typography fontWeight={600}>({product.tot_rating})</Typography>
          </Box>
        ) : (
          <Box mt={1}>
            <Rating
              size="small"
              name="disabled"
              value={product.tot_rating}
              disabled
            />
            ( 0)
          </Box>
        )}
        <Box>
          <Typography>$ {product.salePrice} </Typography>
          <Typography sx={{ textDecoration: "line-through" }}>
            $ {product.price.$numberDecimal}
          </Typography>
        </Box>
      </Box>
    </Col>
  );
};

export default Product;
