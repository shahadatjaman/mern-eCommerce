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
import ProductContent from "../../Components/ProductDetails/ProductContent/productContent";
import DescriptionReview from "../../Components/ProductDetails/Review/DescriptionReview";
//mport { products } from "./data";

import ReletedProduct from "../../Components/ProductDetails/ReletedProducts/ReletedProduct";

import { fetchProducts } from "../../feature/reducer/product";

import {
  getProduct,
  getSelectedProduct,
  fetchProduct,
  getDimension,
} from "../../feature/reducer/productDetails";

const Details = () => {
  const [image, setImaage] = useState(null);

  const [isActive, setActive] = useState(null);

  // Get product id by params
  const { id } = useParams();

  // Get products
  const { products } = useSelector((state) => state.product);

  // Product Details
  const { currentImage, selectedProduct, product, dimension } = useSelector(
    (state) => state.productDetails
  );

  const dispatch = useDispatch();

  const changeDimension = (dimension) => {
    dispatch(getSelectedProduct(dimension));

    setImaage(dimension);

    // selected image to gallery
    setActive(dimension);

    // Set Single product to state
    dispatch(getSelectedProduct(dimension));

    // Set Dimension product to state
    if (product) {
      const { size, price } = dimension.sizes[0];
      const newDimension = {
        _id: product._id,
        title: product.title,
        color: dimension.color,
        size: size,
        price: price,
        subtotal: price,
      };

      dispatch(getDimension(newDimension));
    }
  };

  // Get Products
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Get Product
  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  // Default selected product
  useEffect(() => {
    if (currentImage) {
      setImaage(currentImage);
    }
  }, [currentImage]);

  // Default Selected Dimensions

  useEffect(() => {
    if (product && selectedProduct) {
      const { color, sizes } = product.small_images[0];
      const { price, size } = sizes[0];
      const dimenstion = {
        _id: product._id,
        title: product.title,
        img_url: selectedProduct.url,
        color,
        qty: 1,
        size,
        price,
        subtotal: price,
      };

      dispatch(getDimension(dimenstion));
    }
  }, [dispatch, product, selectedProduct]);

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
    if (dimension) {
      setActive(dimension.img_url);
    }
  }, [dimension]);

  return (
    <Layout>
      <BreadCrumb pathName="Details" />
      <GalleryWrapper>
        <Container>
          <Row>
            <Col className="col-lg-6 col-md-6 col-sm-12 col-12">
              <Gallery>
                <LargeImageWrapper>
                  {selectedProduct && <Image src={selectedProduct.url} />}
                </LargeImageWrapper>
                <SmallImageWrapper>
                  {product &&
                    product.small_images.map((item, index) => (
                      <SmallWrapper
                        onClick={() => changeDimension(item)}
                        key={index}
                        bordered={isActive && isActive === item.url && "active"}
                      >
                        <SmallImg src={item.url} alt="product" />
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
