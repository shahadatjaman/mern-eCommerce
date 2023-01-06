// import { Col, Container, Row } from "react-bootstrap";
import { Container, Grid } from "@mui/material";
import { useWindowWidth } from "../../hooks/userWindowWidth";

import Products from "./Products";
import { Wrapper } from "./Styles";
import Timer from "./Timer";

const TimerPart = () => {
  const isFluid = useWindowWidth({ width: 1400 });

  return (
    <Wrapper>
      <Container maxWidth={"xl"}>
        <Grid container spacing={2}>
          <Grid item xl={4} lg={4} md={6} sm={12} xxs={12}>
            <Timer />
          </Grid>
          <Grid item xl={4} lg={4} md={6} sm={8} xxs={12}>
            <Products
              id="63ab3df4ba6e5a0fde1ec5f7"
              title={"Personal Protective Equipment"}
            />
          </Grid>
          <Grid item xl={4} lg={4} md={6} sm={8} xxs={12}>
            {/* <Products id="638d718dc57c08cdc0b59ca0" title={"Top Ranking"} /> */}
            <Products id="63ab3d7fba6e5a0fde1ec5eb" title={"New arrivals"} />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default TimerPart;
