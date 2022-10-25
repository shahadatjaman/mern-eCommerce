//<=== Hooks ====>
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

//<====  Redux Toolkit || Reducer functions   ====>
import {
  getSelectedProduct,
  fetchProduct,
  getDimension,
} from "../../feature/reducer/productDetails";

//<=== Components  ====>
import Layout from "../Layout";
import ProductContent from "../../Components/ProductDetails/ProductContent/productContent";
import DescriptionReview from "../../Components/ProductDetails/Review/DescriptionReview";
import ReletedProduct from "../../Components/ProductDetails/ReletedProducts/ReletedProduct";
import BreadCrumb from "../../Components/Shared/BreadCrumb";
import { Container, Row, Col } from "react-bootstrap";

//<==== Styled Components  ====>
import {
  Gallery,
  GalleryWrapper,
  Image,
  LargeImageWrapper,
  SeffContainer,
  SmallImageWrapper,
  SmallImg,
  SmallWrapper,
} from "./styles";

const Details = () => {
  const [isActive, setActive] = useState(null);

  // Get product id by params ===>
  const { id } = useParams();

  //  Product state ===>
  const { selectedProduct, product, dimension } = useSelector(
    (state) => state.productDetails
  );

  const dispatch = useDispatch();

  // Product dimenstion handler ===>
  const changeDimension = (dimension) => {
    // which product will be selected to global state
    dispatch(getSelectedProduct(dimension));

    // Active product ==>
    setActive(dimension);

    // Create Dimension Object and store it to global state ===>
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

  // Get Product
  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  //Create default dimensions when this componet will be render
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
      // Store dimentions in global state
      dispatch(getDimension(dimenstion));
    }
  }, [dispatch, product, selectedProduct]);

  // Which product'll be Selected when first time render
  useEffect(() => {
    if (product) {
      dispatch(getSelectedProduct(product.small_images[0]));
    }
  }, [dispatch, product]);

  // Which product'll be active when first time render
  useEffect(() => {
    if (dimension) {
      setActive(dimension.img_url);
    }
  }, [dimension]);

  return (
    <Layout>
      <BreadCrumb pathName="Details" />
      <GalleryWrapper>
        <SeffContainer>
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
              {product && <ProductContent />}
            </Col>
          </Row>
        </SeffContainer>
      </GalleryWrapper>

      {/* Product Review and Description */}
      {product && <DescriptionReview data={product} />}
      <ReletedProduct />
    </Layout>
  );
};

export default Details;
