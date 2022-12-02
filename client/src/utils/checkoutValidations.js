export const checkoutValidations = (values) => {
  const errors = {};

  if (!values.company_name) {
    errors.company_name = "Company name is required!";
  }

  if (!values.country) {
    errors.country = "Country is required!";
  }
  if (!values.street_address) {
    errors.street_address = "Street address is required!";
  }
  if (!values.phone) {
    errors.phone = "Phone number is required!";
  }

  if (!values.postcode_zip) {
    errors.postcode_zip = "Postcode or Zip is required!";
  }

  if (!values.state_country) {
    errors.state_country = "State or Country is required!";
  }
  if (!values.town_city) {
    errors.town_city = "Town or City is required!";
  }
  return { errors };
};
