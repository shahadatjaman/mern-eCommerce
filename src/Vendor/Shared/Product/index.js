//<=== Hooks ====>
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";

//<=== Reducer Functions ====>
import {
  createInitProduct,
  addProductFormState,
  createProduct,
} from "../../feature/reducer/Product/createProduct";

//<===Styled Components ====>
import Input from "../../Shared/Form/Input";
import { ButtonWrap } from "../../Components/Products/Styles";

// <=== ReactStrap ====>
import { Col, Container, Row } from "react-bootstrap";

// <=== Components  ====>

import Editor from "./Editor/index";

import Pricing from "../../Components/Products/Pricing/Pricing";
import ProductOrga from "../../Components/Products/Category/ProductOrga";
import ProductVariations from "../../Components/Products/Attribute/ProductVariations";
import Back from "../../Shared/Backbutton/Back";
import { Cart, H3, Hr, Wrapper } from "../../Shared/Styles";
//import RichTextEditor from "../../Components/Products/Descriptions/Editor";
import { PageHeader, SatySave, Save } from "./Styles";

import Modal from "../../Shared/Modal";
import { productInitValidation } from "../../Validation/prductInitValid";
import { useState } from "react";
import Inventory from "../../Components/Products/Inventory";

import { createInventory } from "../../feature/reducer/Product/inventory";
import { createProductDiscount } from "../../feature/reducer/Product/productPricing";
import { useNavigate, useParams } from "react-router-dom";
import { generateId } from "../../utils";

// const _id = ObjectId();
const CreateNewProduct = ({ title }) => {
  const [long_desc, setLong_desc] = useState("");
  const [inventory, setInventory] = useState({});

  const { productInit, productFormState, product } = useSelector(
    (state) => state.createproduct
  );

  const { formState, isValidForm, handleChange, handleFocus, handleBlur } =
    useForm({
      init: productInit.requiredValue,
      validate: productInitValidation,
    });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { name, price, short_desc } = formState;

  const _param = useParams();
  // CREATE INITIAL PRODUCT
  useEffect(() => {
    if (!_param.product_id) {
      dispatch(
        createInitProduct({
          pathOne: "v1",
          pathTwo: "createemptyproduct",
          method: "get",
        })
      );
    }
  }, [dispatch, _param]);

  useEffect(() => {
    const sku = generateId(20);

    const values = {
      name: name.value,
      price: price.value,
      short_desc: short_desc.value,
      long_desc,
      isValid: true,
      SKU: inventory.sku ? inventory.sku : sku,
    };

    if (_param.product_id) {
      dispatch(
        addProductFormState({
          product_id: _param.product_id,
          ...values,
        })
      );
    } else {
      dispatch(
        addProductFormState({
          product_id: product ? product._id : "",
          ...values,
        })
      );
    }
  }, [
    dispatch,
    price,
    name,
    short_desc,
    product,
    inventory,
    long_desc,
    _param,
  ]);

  // SUBMIT PRODUCT
  const submitForm = ({ stay }) => {
    if (isValidForm) {
      dispatch(
        createProduct({
          pathOne: "v1",
          pathTwo: "createproduct",
          values: { ...productFormState },
          method: "post",
        })
      );
    }

    const values = {
      quantity: productFormState.isStock,
      weight: productFormState.weight ? productFormState.weight : 0,
    };

    dispatch(
      createInventory({
        pathOne: "v1",
        pathTwo: "inventory",
        _id: _param.product_id ? _param.product_id : product._id,
        values: { ...values },
        method: "post",
      })
    );

    if (productFormState.discount !== undefined) {
      const values = {
        discount_percent: productFormState.discount,
      };
      dispatch(
        createProductDiscount({
          pathOne: "v1",
          pathTwo: "creatediscount",
          _id: _param.product_id ? _param.product_id : product._id,
          values: { ...values },
          method: "post",
        })
      );
    }

    if (isValidForm) {
      navigate("/collections");
    }
  };

  return (
    <Wrapper>
      <Modal />
      <Container className="p-0">
        <PageHeader>
          <Back />
          <H3>{title}</H3>
        </PageHeader>
        <Row>
          <Col className="col-xl-8 col-md-12 col-sm-12 col-12">
            <Cart>
              {/* Product Name */}
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

              {/* Short Description */}
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

              {/* Text Editor */}
              <Editor setLong_desc={setLong_desc} />
            </Cart>

            {/* Product variations / options */}
            <ProductVariations />

            {/* Product Pricing */}
            <Pricing
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleFocus={handleFocus}
              value={price}
              setInventory={setInventory}
            />

            {/* Inventory like , SKU weight and inventory status  */}
            <Inventory setInventory={setInventory} />
          </Col>
          <Col className="col-xl-4 col-md-12 col-sm-12 col-12">
            {/* Product organization like status, Category, sub category and tags, etc */}
            <ProductOrga />
          </Col>
        </Row>
        <Hr />
        <ButtonWrap>
          <SatySave
            onClick={submitForm}
            isValid={isValidForm}
            disabled={!isValidForm ? true : false}
            color={"red"}
            height="45"
            width="15"
            text="Save"
            activeColor="#221ecd"
            radius="50"
          >
            Save and stay Here
          </SatySave>
          <Save
            onClick={submitForm}
            isValid={isValidForm}
            disabled={!isValidForm ? true : false}
            color={"red"}
            height="45"
            width="10"
            text="Save"
            activeColor="#221ecd"
            radius="50"
          >
            Save and Go
          </Save>
        </ButtonWrap>
      </Container>
    </Wrapper>
  );
};

export default React.memo(CreateNewProduct);
