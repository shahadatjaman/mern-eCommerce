import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import BreadCrumb from "../../Components/Shared/BreadCrumb";
import { Wrapper } from "../../Components/Shared/Styles/styles";
import Layout from "../Layout";
import { H3 } from "./Styles";
import Form from "../../Components/Shared/Form/Form";
import Input from "../../Components/Shared/Form/Input";
import SelectInput from "../../Components/Shared/Form/Select/Select";

import Option from "../../Components/Shared/Form/Select/Option";

import { useForm } from "../../hooks/useForm";
import { checkoutValidations } from "../../utils/checkoutValidations";
import Button from "../../Components/Shared/Form/Button";
import { SbubmitBtn } from "./Styles.js";
import { useColor } from "../../utils";
import { createUserAddress, getUserAddress } from "../../feature/reducer/user";

const Billing = () => {
  const { userAddress, isLoading } = useSelector((state) => state.user);

  const {
    formState,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
    isValidForm,
  } = useForm({
    init: userAddress,
    validate: checkoutValidations,
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const cb = ({ values }) => {
    dispatch(createUserAddress({ navigate, values }));
    dispatch(getUserAddress(values));
  };
  const { primary, gray } = useColor();
  const {
    company_name,
    street_address,
    phone,
    postcode_zip,
    country,
    state_country,
    town_city,
  } = formState;

  return (
    <Wrapper>
      <Form onSubmit={(e) => handleSubmit(e, cb)}>
        <Container>
          <Row xs="2">
            <Col className="offset-md-2" md="8" sm="12">
              <H3>Billing Details</H3>
              <Row>
                <Col md="12" className="mb-4">
                  <Input
                    name="company_name"
                    autoFocus
                    type="text"
                    label="Company Name"
                    value={company_name.value}
                    error={company_name.error}
                    handleChange={handleChange}
                    handleFocus={handleFocus}
                    handleBlur={handleBlur}
                  />
                </Col>
                <Col md="12" className="mb-4">
                  <SelectInput
                    name="country"
                    label="Country"
                    value={country.value}
                    defaultValue=""
                    error={country.error}
                    handleChange={handleChange}
                    handleFocus={handleFocus}
                    handleBlur={handleBlur}
                  >
                    <Option
                      disabled="true"
                      selected="true"
                      option="Select a country"
                    />
                    <Option option="Afgansthan" value="afgansthan" />
                    <Option option="Bangladesh" value="bangladesh" />
                    <Option option="Pakisthan" value="pakisthan" />
                  </SelectInput>
                </Col>
                <Col md="12" className="mb-4">
                  <Input
                    label="Street Address"
                    name="street_address"
                    placeHolder="House number and street name"
                    value={street_address.value}
                    error={street_address.error}
                    handleChange={handleChange}
                    handleFocus={handleFocus}
                    handleBlur={handleBlur}
                  />
                </Col>
                <Col md="12" className="mb-4">
                  <Input
                    label="Town / City"
                    name="town_city"
                    value={town_city.value}
                    error={town_city.error}
                    handleChange={handleChange}
                    handleFocus={handleFocus}
                    handleBlur={handleBlur}
                  />
                </Col>
                <Col md="6" className="mb-4">
                  <Input
                    label="State / County"
                    name="state_country"
                    value={state_country.value}
                    error={state_country.error}
                    handleChange={handleChange}
                    handleFocus={handleFocus}
                    handleBlur={handleBlur}
                  />
                </Col>
                <Col md="6" className="mb-4">
                  <Input
                    label="Postcode / ZIP"
                    name="postcode_zip"
                    value={postcode_zip.value}
                    error={postcode_zip.error}
                    handleChange={handleChange}
                    handleFocus={handleFocus}
                    handleBlur={handleBlur}
                  />
                </Col>
                <Col md="12" className="mb-4">
                  <Input
                    type="number"
                    name="phone"
                    label="Phone"
                    placeHolder="01XXXXXXXX"
                    value={phone.value}
                    error={phone.error}
                    handleChange={handleChange}
                    handleFocus={handleFocus}
                    handleBlur={handleBlur}
                  />
                </Col>

                <Col md="12" className="mb-4">
                  <H3>Additional information</H3>
                  <Input
                    height="73"
                    type="textarea"
                    label="Order notes"
                    placeHolder="Notes about your order, e.g. special notes for delivery. "
                  />
                </Col>
              </Row>
              <SbubmitBtn>
                <Button
                  text="Next"
                  activeColor={gray}
                  hoverColor={primary}
                  isDisabled={isValidForm}
                  redirect="/order"
                >
                  Next
                </Button>
              </SbubmitBtn>
            </Col>
          </Row>
        </Container>
      </Form>
    </Wrapper>
  );
};

export default Billing;
