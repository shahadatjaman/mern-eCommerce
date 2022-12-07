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
import { allproducts } from "./data";
import FeatureProdcut from "./Features";

import { useWindowWidth } from "../../../hooks/userWindowWidth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchProducts } from "../../../feature/reducer/product";

const SpeOffer = () => {
  const { products } = useSelector((state) => state.product);

  const isFluid = useWindowWidth({ width: 1400 });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
              </Timer>
            </Item>

            {[1, 2].map((item, index) => (
              <FeatureProdcut />
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
