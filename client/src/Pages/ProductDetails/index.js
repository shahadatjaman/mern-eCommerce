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

const products = {
  _id: "dgg4g5dg5dggkf",
  title: "Lorem ipsum fashion jacket",
  imageOne:
    "https://flone.jamstacktemplates.dev/assets/img/product/electronics/1.jpg",
  imageTwo:
    "https://flone.jamstacktemplates.dev/assets/img/product/electronics/2.jpg",
  ratting: 0,
  price: 24.54,
  old: 20.57,
  shortDesc:
    "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
  categories: [
    {
      name: "fashion",
      path: "/product/fashion",
    },
    {
      name: "men",
      path: "/product/fashion",
    },
  ],
  tags: [
    {
      name: "jacket",
      path: "/product/fashion",
    },
    {
      name: "full sleeve",
      path: "/product/fashion",
    },
  ],
  social: [
    {
      icon: "fa-brands fa-facebook-f",
      url: "https://www.facebook.com/",
    },
    {
      icon: "fa-brands fa-dribbble",
      url: "https://dribbble.com/",
    },
    {
      icon: "fa-brands fa-pinterest",
      url: "https://www.pinterest.com/",
    },
  ],
  gallery: [
    {
      _id: "6464646d444",
      url: "https://flone.jamstacktemplates.dev/assets/img/product/fashion/29.jpg",
    },
    {
      _id: "5464564554",
      url: "https://flone.jamstacktemplates.dev/assets/img/product/fashion/30.jpg",
    },
    {
      _id: "4564544444",
      url: "https://flone.jamstacktemplates.dev/assets/img/product/fashion/23.jpg",
    },
    {
      _id: "f54f6g4f44",
      url: "https://flone.jamstacktemplates.dev/assets/img/product/fashion/24.jpg",
    },
  ],
};

const Details = () => {
  const [image, setImaage] = useState(null);

  useEffect(() => {
    setImaage(products.gallery[0].url);
  }, []);

  const changeImage = (url) => {
    setImaage(url);
  };

  return (
    <Layout>
      <BreadCrumb pathName="Details" />
      <GalleryWrapper>
        <Container>
          <Row>
            <Col className="col-lg-6 col-md-6">
              <Gallery>
                <LargeImageWrapper>
                  {image && <Image src={image} />}
                </LargeImageWrapper>
                <SmallImageWrapper>
                  {products.gallery.map((img, index) => (
                    <SmallWrapper
                      onClick={() => changeImage(img.url)}
                      key={index}
                    >
                      <SmallImg src={img.url} />
                    </SmallWrapper>
                  ))}
                </SmallImageWrapper>
              </Gallery>
            </Col>
            <Col className="col-lg-6 col-md-6">
              <ProductContent content={products} />
            </Col>
          </Row>
        </Container>
      </GalleryWrapper>
    </Layout>
  );
};

export default Details;
