//<=== Hooks ====>
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";

//<=== Reducer Functions ====>
import {
  createId,
  createInitProduct,
  addProductFormState,
  createProduct,
} from "../../feature/reducer/createProduct";

//<===Styled Components ====>
import Input from "../../../Components/Shared/Form/Input";
import { ButtonWrap } from "../../Components/Products/Styles";

// <=== ReactStrap ====>
import { Col, Container, Row } from "reactstrap";

// <=== Components  ====>

import { ObjectId } from "../../../utils";
import Pricing from "../../Components/Products/Pricing/Pricing";
import ProductOrga from "../../Components/Products/Category/ProductOrga";
import ProductStatus from "../../Components/Products/Status/ProductStatus";
import ProductVariations from "../../Components/Products/Attribute/ProductVariations";
import Back from "../../Shared/Backbutton/Back";
import { Cart, CustomButton, H3, Hr, Wrapper } from "../../Shared/Styles";
//import RichTextEditor from "../../Components/Products/Descriptions/Editor";
import { PageHeader, Button } from "./Styles";

import Modal from "../../Shared/Modal";
import { productInitValidation } from "../../Validation/prductInitValid";
import { useState } from "react";
import Layout from "../Layout/Layout";

const _id = ObjectId();
const Product = () => {
  const [discount, setDiscount] = useState(0);

  const { productInit, productFormState, product } = useSelector(
    (state) => state.createproduct
  );

  const { formState, isValidForm, handleChange, handleFocus, handleBlur } =
    useForm({
      init: productInit,
      validate: productInitValidation,
    });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createId(_id));
  }, [dispatch]);

  const { name, price, short_desc } = formState;

  useEffect(() => {
    dispatch(createInitProduct());
  }, [dispatch]);

  const getDiscount = (dis) => {
    setDiscount(dis);
  };

  useEffect(() => {
    dispatch(
      addProductFormState({
        product_id: product ? product._id : "",
        name: name.value,
        price: price.value,
        short_desc: short_desc.value,
        discount,
        isValid: true,
      })
    );
  }, [dispatch, price, name, short_desc, discount, product]);

  const submitForm = () => {
    if (isValidForm) {
      dispatch(createProduct(productFormState));
    }
  };

  console.log(isValidForm);
  return (
    <Wrapper>
      <Modal />

      <Container className="p-0">
        <PageHeader>
          <Back />
          <H3>Add product</H3>
        </PageHeader>
        <Row>
          <Col md="8">
            <Cart>
              <Input
                mb="1"
                name={"name"}
                type="text"
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleFocus={handleFocus}
                value={name.value}
                label="Name"
                placeHolder="Short sleeve t-shirt"
                error={name.error}
              />

              {/* <RichTextEditor initialValue="" getValue={getValue} /> */}
              <Input
                name="short_desc"
                type="textarea"
                label="Short description"
                placeHolder="Description"
                height="100"
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleFocus={handleFocus}
                value={short_desc.value}
              />
            </Cart>
            <ProductVariations />
            <Pricing
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleFocus={handleFocus}
              value={price}
              getDiscount={getDiscount}
            />
          </Col>
          <Col md="4">
            {/* <ProductStatus /> */}
            <ProductOrga />
          </Col>
        </Row>
        <Hr />
        <ButtonWrap>
          <CustomButton
            isValid={isValidForm}
            onClick={submitForm}
            disabled={!isValidForm}
          >
            Save
          </CustomButton>
        </ButtonWrap>
      </Container>
    </Wrapper>
  );
};

export default React.memo(Product);
