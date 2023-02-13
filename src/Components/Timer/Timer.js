import { Box, Container, Grid } from "@mui/material";
import {
  ColoredSpan,
  OfferImg,
  OfferImgWrapper,
  TimerWrapper,
  BtnTitle,
  Price,
  Counter,
  TimerPart,
  OfferTitle,
} from "./Styles";
// import { Col, Container, Row } from "react-bootstrap";
// import {
//   BtnTitle,
//   ColoredSpan,
//   Counter,
//   OfferImg,
//   OfferImgWrapper,
//   OfferTimer,
//   OfferTitle,
//   Price,
//   TimerPart,
//   TimerWrapper,
// } from "./Styles";

// const Timer = () => {
//   return (
//     <TimerWrapper>
//       <Container>
//         <Row>
//           <Col className="col-7"></Col>
//           <Col className="col-5">
//             <OfferTitle>Hurry Up! Offer Ends In :</OfferTitle>
//           </Col>
//         </Row>

//         <Row>
//           <Col className="col-12">
//             <OfferTimer>
//               <Row className="sm-w-100">
//                 <Col className="col-lg-6 col-xxl-6 p-0 col-md-7 col-6">
//                   {/* timer image */}
//                   <OfferImgWrapper>
//                     <OfferImg
//                       src={
//                         "https://res.cloudinary.com/dza2t1htw/image/upload/v1668879016/hand.6dbada8d0c3ccffa5f62_cdx0wl.png"
//                       }
//                       alt="hand"
//                     />
//                     <ColoredSpan>Deals of the week</ColoredSpan>
//                   </OfferImgWrapper>
//                 </Col>
//                 <Col className="col-lg-6 col-xxl-6 p-0 col-md-5 col-6">
//                   {/* timer part */}
//                   <TimerPart>
//                     <Counter>
//                       <span>
//                         <span>06</span>
//                         <p>HOURS</p>
//                       </span>
//                       <p>:</p>
//                       <span>
//                         <span>06</span>
//                         <p>MENS</p>
//                       </span>
//                       <p>:</p>
//                       <span>
//                         <span>06</span>
//                         <p>SEC</p>
//                       </span>
//                     </Counter>
//                     <BtnTitle>
//                       <h6>Game Console Controner USB 3.0 cable </h6>
//                       <Price>
//                         <span>$ 79.00</span>
//                         <p>$ 19.00</p>
//                       </Price>
//                       <span className="d-block">
//                         <span>Available : </span>
//                         <span>
//                           Solid : <p>70</p>
//                         </span>
//                       </span>
//                     </BtnTitle>
//                   </TimerPart>
//                 </Col>
//               </Row>
//             </OfferTimer>
//           </Col>
//         </Row>
//       </Container>
//     </TimerWrapper>
//   );
// };

// export default Timer;

const TimerComponent = () => {
  return (
    <TimerWrapper>
      <Container maxWidth={"xl"}>
        <Grid container spacing={2}>
          <Grid item lg={6} xl={6} md={6} sm={6} xxs={12}>
            <OfferImgWrapper>
              <OfferImg
                src={
                  "https://res.cloudinary.com/dza2t1htw/image/upload/v1668879016/hand.6dbada8d0c3ccffa5f62_cdx0wl.png"
                }
                alt="hand"
              />
              <ColoredSpan>Deals of the week</ColoredSpan>
            </OfferImgWrapper>
          </Grid>
          <Grid item lg={6} xl={6} md={6} sm={6} xxs={12}>
            <Box>
              <OfferTitle>Hurry Up! Offer Ends In :</OfferTitle>
            </Box>
            <TimerPart>
              <Counter>
                <span>
                  <span>06</span>
                  <p>HOURS</p>
                </span>
                <p>:</p>
                <span>
                  <span>06</span>
                  <p>MENS</p>
                </span>
                <p>:</p>
                <span>
                  <span>06</span>
                  <p>SEC</p>
                </span>
              </Counter>
              <BtnTitle>
                <h6>Game Console Controner USB 3.0 cable </h6>
                <Price>
                  <span>$ 79.00</span> <p>$ 19.00</p>
                </Price>
                <span className="d-block">
                  <span>Available : </span>
                  <span>
                    Solid : <p>70</p>
                  </span>
                </span>
              </BtnTitle>
            </TimerPart>
          </Grid>
        </Grid>
      </Container>
    </TimerWrapper>
  );
};

export default TimerComponent;
