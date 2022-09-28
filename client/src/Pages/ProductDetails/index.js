import { useSelector, useDispatch } from "react-redux";

import Layout from "../Layout";

import BreadCrumb from "../../Components/Shared/Components/BreadCrumb";

import { Container, Row, Col } from "react-bootstrap";
import {
  Gallery,
  GalleryWrapper,
  Image,
  LargeImageWrapper,
  SmallImageWrapper,
  SmallImg,
  SmallWrapper,
} from "./styles";
import { useEffect, useState } from "react";
import ProductContent from "./Components/productContent";
import DescriptionReview from "./Components/DescriptionReview";
//mport { products } from "./data";

import ReletedProduct from "./Components/ReletedProduct";

import { fetchProducts } from "../../feature/reducer/product";

const Details = () => {
  const [image, setImaage] = useState(null);

  const [isActive, setActive] = useState(null);

  // Get products
  const { products } = useSelector((state) => state.product);

  // Product Details
  const { currentImage } = useSelector((state) => state.productDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    if (products) {
      setImaage(products[0].small_images[0]);
    }
  }, [products]);

  const changeImage = (img) => {
    setImaage(img);
    setActive(img);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(currentImage);

  useEffect(() => {
    if (currentImage) {
      setImaage(currentImage);
    }
  }, [currentImage]);

  console.log(isActive);
  return (
    <Layout>
      <BreadCrumb pathName="Details" />
      <GalleryWrapper>
        <Container>
          <Row>
            <Col className="col-lg-6 col-md-6 col-sm-12" col-12>
              <Gallery>
                <LargeImageWrapper>
                  {image && <Image src={image.url} />}
                </LargeImageWrapper>
                <SmallImageWrapper>
                  {products &&
                    products[0].small_images.map((img, index) => (
                      <SmallWrapper
                        onClick={() => changeImage(img)}
                        key={index}
                        bordered={
                          isActive && isActive.color === img.color && "active"
                        }
                      >
                        <SmallImg src={img.url} />
                      </SmallWrapper>
                    ))}
                </SmallImageWrapper>
              </Gallery>
            </Col>
            <Col className="col-lg-6 col-md-6 col-sm-12 col-12">
              {products && (
                <ProductContent img_info={image} content={products[0]} />
              )}
            </Col>
          </Row>
        </Container>
      </GalleryWrapper>
      {products && <DescriptionReview data={products[0]} />}
      <ReletedProduct />
    </Layout>
  );
};

export default Details;
