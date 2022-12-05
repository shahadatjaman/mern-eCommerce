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
import { Col, Container, Row } from "react-bootstrap";

// <=== Components  ====>

import { ObjectId } from "../../../utils";
import Pricing from "../../Components/Products/Pricing/Pricing";
import ProductOrga from "../../Components/Products/Category/ProductOrga";
import ProductVariations from "../../Components/Products/Attribute/ProductVariations";
import Back from "../../Shared/Backbutton/Back";
import { Cart, CustomButton, H3, Hr, Wrapper } from "../../Shared/Styles";
//import RichTextEditor from "../../Components/Products/Descriptions/Editor";
import { PageHeader, Save } from "./Styles";

import Modal from "../../Shared/Modal";
import { productInitValidation } from "../../Validation/prductInitValid";
import { useState } from "react";
import Inventory from "../../Components/Products/Inventory";
import { createInventory } from "../../feature/reducer/inventory";
import Button from "../../../Components/Shared/Form/Button";
import { createProductDiscount } from "../../feature/reducer/productPricing";

const _id = ObjectId();
const Product = () => {
  const [discount, setDiscount] = useState(0);
  const [status, setStatus] = useState("");
  const [sku, setSku] = useState("");
  const [weight, setWeight] = useState(0.0);

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
  const getStatus = (sta) => {
    setStatus(sta);
  };
  const getSku = (SKU) => {
    setSku(SKU);
  };
  const getWeight = (WEIGHT) => {
    setWeight(WEIGHT);
  };

  useEffect(() => {
    dispatch(
      addProductFormState({
        product_id: product ? product._id : "",
        name: name.value,
        price: price.value,
        short_desc: short_desc.value,
        isValid: true,
        SKU: sku,
      })
    );
  }, [dispatch, price, name, short_desc, product, sku]);

  const submitForm = () => {
    if (isValidForm) {
      dispatch(createProduct(productFormState));
    }

    if (status.trim().length !== 0) {
      const values = {
        quantity: status,
        weight,
      };
      dispatch(createInventory({ values, product_id: product._id }));
    }

    if (discount > 0) {
      const values = {
        discount_percent: discount,
      };
      dispatch(
        createProductDiscount({
          values,
          product_id: product._id,
        })
      );
    }
  };

  return (
    <Wrapper>
      <Modal />
      <Container className="p-0">
        <PageHeader>
          <Back />
          <H3>Add product</H3>
        </PageHeader>
        <Row>
          <Col className="col-xl-8 col-md-12 col-sm-12 col-12">
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
            <Inventory
              getStatus={getStatus}
              getSku={getSku}
              getWeight={getWeight}
            />
          </Col>
          <Col className="col-xl-4 col-md-12 col-sm-12 col-12">
            {/* <ProductStatus /> */}
            <ProductOrga />
          </Col>
        </Row>
        <Hr />
        <ButtonWrap>
          {/* <Button
            isValid={isValidForm}
            onClick={submitForm}
            //   disabled={isValidForm}
            color={"red"}
            height="45"
            width="10"
            text="Save"
            activeColor="#221ecd"
            radius="10"
          /> */}
          <Save
            onClick={submitForm}
            isValid={isValidForm}
            disabled={!isValidForm ? true : false}
            color={"red"}
            height="45"
            width="10"
            text="Save"
            activeColor="#221ecd"
            radius="10"
          >
            Save
          </Save>
        </ButtonWrap>
      </Container>
    </Wrapper>
  );
};

export default React.memo(Product);
