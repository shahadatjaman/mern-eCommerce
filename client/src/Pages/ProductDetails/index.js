import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router-dom";

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

import {
  getProduct,
  getSelectedProduct,
  fetchProduct,
} from "../../feature/reducer/productDetails";

const Details = () => {
  const [image, setImaage] = useState(null);

  const [isActive, setActive] = useState(null);

  // Get product id by params
  const { id } = useParams();

  // Get products
  const { products } = useSelector((state) => state.product);

  // Product Details
  const { currentImage, selectedProduct, product } = useSelector(
    (state) => state.productDetails
  );

  const dispatch = useDispatch();

  const changeImage = (img) => {
    // const cartData = { image, _id: "" };

    dispatch(getSelectedProduct(img));

    setImaage(img);

    // selected image to gallery
    setActive(img);

    // Set Single product to state
    dispatch(getSelectedProduct(img));
  };

  // Get Products
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Get Product
  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (currentImage) {
      setImaage(currentImage);
    }
  }, [currentImage]);

  // Set single product to state
  useEffect(() => {
    if (product) {
      dispatch(getProduct(product));
    }
  }, [dispatch, product]);

  // Get selected product
  useEffect(() => {
    if (product) {
      dispatch(getSelectedProduct(product.small_images[0]));
    }
  }, [dispatch, product]);

  useEffect(() => {
    if (product) {
      dispatch(getSelectedProduct(product.small_images[0]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  useEffect(() => {
    if (product) {
      setActive(product.small_images[0]);
    }
  }, [product]);

  return (
    <Layout>
      <BreadCrumb pathName="Details" />
      <GalleryWrapper>
        <Container>
          <Row>
            <Col className="col-lg-6 col-md-6 col-sm-12" col-12>
              <Gallery>
                <LargeImageWrapper>
                  {selectedProduct && <Image src={selectedProduct.url} />}
                </LargeImageWrapper>
                <SmallImageWrapper>
                  {product &&
                    product.small_images.map((img, index) => (
                      <SmallWrapper
                        onClick={() => changeImage(img)}
                        key={index}
                        bordered={
                          isActive && isActive.color === img.color && "active"
                        }
                      >
                        <SmallImg src={img.url} alt="product" />
                      </SmallWrapper>
                    ))}
                </SmallImageWrapper>
              </Gallery>
            </Col>
            <Col className="col-lg-6 col-md-6 col-sm-12 col-12">
              {products && <ProductContent />}
            </Col>
          </Row>
        </Container>
      </GalleryWrapper>
      {product && <DescriptionReview data={product} />}
      <ReletedProduct />
    </Layout>
  );
};

export default Details;
