import { Col, Container, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import {
  Available,
  Button,
  Caption,
  Categoreis,
  Counter,
  Img,
  ImgWrapper,
  Item,
  Menu,
  Offerprice,
  PriceBtn,
  Progress,
  Progressbar,
  Roatoted,
  SpecialOffer,
  Timer,
  TopBar,
  TopBtn,
  Wrapper,
} from "./Styles";

import Product from "../../Shared/Product/Product";
import FeatureProdcut from "./Features";

import { useWindowWidth } from "../../../hooks/userWindowWidth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  fetchProducts,
  getProductByCategory,
} from "../../../feature/reducer/product";
import { useState } from "react";

const SpeOffer = () => {
  const [clock, setClock] = useState(null);

  const { products, featureProduct } = useSelector((state) => state.product);

  const isFluid = useWindowWidth({ width: 1400 });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      getProductByCategory({
        category_id: "638d7127c57c08cdc0b59c90",
        from: 0,
        to: 2,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    (() => {
      var start = new Date();
      start.setHours(23, 0, 0); // 11pm

      let pad = (num) => {
        return ("0" + parseInt(num)).substr(-2);
      };

      (function tick() {
        var now = new Date();
        if (now > start) {
          // too late, go to tomorrow
          start.setDate(start.getDate() + 1);
        }
        var remain = (start - now) / 1000;
        var h = pad((remain / 60 / 60) % 60);
        var m = pad((remain / 60) % 60);
        var s = pad(remain % 60);
        setClock({ h, m, s });
        setTimeout(tick, 1000);
      })();
    })();
  }, []);

  return (
    <Wrapper>
      <Container fluid={isFluid}>
        <Row>
          <Col className="col-xxl-3 col-md-3 col-sm-12 col-12">
            <Item>
              <SpecialOffer>
                <Offerprice>
                  <span>
                    <span className="text-light">Save</span>
                    <h6>$20.00</h6>
                  </span>
                </Offerprice>
              </SpecialOffer>
              <ImgWrapper>
                <span>Special offer</span>
                <Img
                  src={
                    "https://res.cloudinary.com/dza2t1htw/image/upload/v1668918282/remot.64ed6179dc9fda7cec4a_uyztho.png"
                  }
                  alt="remot"
                />
              </ImgWrapper>
              <Caption>
                <Button>
                  <h6>Game Console Controner + USB 3.0 cable</h6>
                  <PriceBtn>
                    $ 79.00 <Roatoted>$ 119.00</Roatoted>
                  </PriceBtn>
                </Button>
              </Caption>
              <Progressbar>
                <Progress>
                  <span></span>
                </Progress>
                <Available>
                  <span>
                    Already Sold : <span>70</span>
                  </span>
                  <span>
                    Available : <span>28</span>
                  </span>
                </Available>
              </Progressbar>
              <Timer>
                <h6>Hurry Up! Offer Ends In :</h6>
                {clock && (
                  <Counter>
                    <span>
                      <span>{clock.h}</span>
                      <p>HOURS</p>
                    </span>
                    <p>:</p>
                    <span>
                      <span>{clock.m}</span>
                      <p>MENS</p>
                    </span>
                    <p>:</p>
                    <span>
                      <span>{clock.s}</span>
                      <p>SEC</p>
                    </span>
                  </Counter>
                )}
              </Timer>
            </Item>

            {featureProduct?.map((item, index) => (
              <FeatureProdcut value={item} key={index} />
            ))}
          </Col>
          <Col className="col-xxl-9 col-md-9 col-sm-12 col-12">
            <Categoreis>
              <TopBar>
                <TopBtn>
                  <span>Top Ranked</span>
                </TopBtn>
                <Menu>
                  <span>Top Rabked</span>
                  <span>Top Rabked</span>
                </Menu>
              </TopBar>
              <div className="items">
                <Container fluid={isFluid} className="p-0">
                  <Row>
                    {products?.map((item, index) => (
                      <Col className="col-xxl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                        <Product product={item} />
                      </Col>
                    ))}
                  </Row>
                </Container>
              </div>
            </Categoreis>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default SpeOffer;
