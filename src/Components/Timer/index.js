// import { Col, Container, Row } from "react-bootstrap";
import { Container, Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNewProducts,
  getProtectiveProducts,
} from "../../feature/reducer/getProducts";

import Products from "./Products";
import { Wrapper } from "./Styles";
import Timer from "./Timer";

const TimerPart = () => {
  const { protective, loading, loadingNewProducts, newProducts } = useSelector(
    (state) => state.getItems
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProtectiveProducts("63ab3df4ba6e5a0fde1ec5f7"));
    dispatch(getNewProducts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Container maxWidth={"xl"}>
        <Grid container spacing={2}>
          <Grid item xl={4} lg={4} md={6} sm={12} xxs={12}>
            <Timer />
          </Grid>
          <Grid item xl={4} lg={4} md={6} sm={8} xxs={12}>
            <Products
              title={"Personal Protective Equipment"}
              products={protective}
            />
          </Grid>
          <Grid item xl={4} lg={4} md={6} sm={8} xxs={12}>
            <Products title={"New arrivals"} products={newProducts} />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default TimerPart;
