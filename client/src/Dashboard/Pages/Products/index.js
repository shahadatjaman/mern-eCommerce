import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import Button from "../../../Components/Shared/Form/Button";
import Form from "../../../Components/Shared/Form/Form";
import Input from "../../../Components/Shared/Form/Input";
import { ObjectId, useColor } from "../../../utils";
import Pricing from "../../Components/Products/Attribute/Pricing";
import ProductOrga from "../../Components/Products/Category/ProductOrga";
import ProductStatus from "../../Components/Products/Status/ProductStatus";
import ProductVariations from "../../Components/Products/Attribute/ProductVariations";
import { ButtonWrap } from "../../Components/Products/Styles";
import { createId } from "../../feature/reducer";
import Back from "../../Shared/Backbutton/Back";
import { Cart, H3, Hr, Wrapper } from "../../Shared/Styles";
import RichTextEditor from "../../Components/Products/Descriptions/Editor";
import { PageHeader } from "./Styles";
import { useForm } from "../../../hooks/useForm";

const _id = ObjectId();

const Product = () => {
  const [value, setValue] = useState("");
  const { alt_id } = useSelector((state) => state.createproduct);
  // const { gray } = useColor();
  const getValue = (value) => {
    setValue(value);
  };

  const { handleSubmit } = useForm({ init: "", validate: true });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createId(_id));
  }, [dispatch]);

  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  return (
    <Wrapper>
      <Container className="p-0">
        <PageHeader>
          <Back />
          <H3>Add product</H3>
        </PageHeader>
        <Row>
          <Col md="8">
            <Cart>
              <Input label="Title" placeHolder="Short sleeve t-shirt" />
              <br />
              <RichTextEditor initialValue="" getValue={getValue} />
            </Cart>
            <ProductVariations />
            <Pricing />
          </Col>
          <Col md="4">
            <ProductStatus />
            <ProductOrga />
          </Col>
        </Row>
        <Hr />
        <ButtonWrap>
          <Button
            text="Save"
            type="submit"
            activeColor="#f1f1f1"
            radius="8"
            width="10"
            height="38"
          />
        </ButtonWrap>
      </Container>
    </Wrapper>
  );
};

export default Product;
