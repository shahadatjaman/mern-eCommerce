import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "../../Components/Shared/Styles/styles";
import { formStyles, H3 } from "./Styles";
import Form from "../../Components/Shared/Form/Form";
import Input from "../../Components/Shared/Form/Input";
import SelectInput from "../../Components/Shared/Form/Select/Select";

import Option from "../../Components/Shared/Form/Select/Option";

import { useForm } from "../../hooks/useForm";
import { checkoutValidations } from "../../utils/checkoutValidations";

import {
  checkUserAddressIsValid,
  createUserAddress,
  getUserAddress,
  getFormState,
} from "../../feature/reducer/user";
import { Box, Grid } from "@mui/material";

const Billing = ({ userAddress }) => {
  const {
    formState,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
    isValidForm,
    valeus,
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

  const {
    company_name,
    street_address,
    phone,
    postcode_zip,
    country,
    state_country,
    town_city,
  } = formState;

  useEffect(() => {
    dispatch(checkUserAddressIsValid({ isValidForm: isValidForm }));
  }, [isValidForm, dispatch]);

  useEffect(() => {
    if (valeus) {
      dispatch(getFormState(valeus));
    }
  }, [dispatch, valeus]);

  console.log(userAddress);

  return (
    <Wrapper>
      <Form onSubmit={(e) => handleSubmit(e, cb)}>
        <Box sx={{ ...formStyles, flexGrow: 1, borderRadius: 2 }}>
          <Grid container spacing={2}>
            <Grid item lg={12} md={12}>
              <H3>Billing Details</H3>
            </Grid>

            <Grid item lg={6} md={6}>
              <Input
                name="company_name"
                type="text"
                label="Company Name"
                value={company_name.value}
                error={company_name.error}
                handleChange={handleChange}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
                autoFocus={true}
              />
            </Grid>
            <Grid item lg={6} md={6}>
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
            </Grid>
            <Grid item lg={12} md={6}>
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
            </Grid>
            <Grid item lg={6} md={6}>
              <Input
                label="Town / City"
                name="town_city"
                value={town_city.value}
                error={town_city.error}
                handleChange={handleChange}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
              />
            </Grid>
            <Grid item lg={6} md={6}>
              <Input
                label="State / County"
                name="state_country"
                value={state_country.value}
                error={state_country.error}
                handleChange={handleChange}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
              />
            </Grid>
            <Grid item lg={8} md={6}>
              <Input
                label="Postcode / ZIP"
                name="postcode_zip"
                value={postcode_zip.value}
                error={postcode_zip.error}
                handleChange={handleChange}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
              />
            </Grid>
            <Grid item lg={4} md={6}>
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
            </Grid>
            <Grid item lg={12} md={12}>
              <H3>Additional information</H3>
              <Input
                height="73"
                type="textarea"
                label="Order notes"
                placeHolder="Notes about your order, e.g. special notes for delivery. "
              />
            </Grid>
          </Grid>
        </Box>
      </Form>
    </Wrapper>
  );
};

export default Billing;
