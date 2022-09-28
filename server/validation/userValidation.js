const validator = require("validator");

module.exports = ({ firstName, lastName, email, password }) => {
  const errors = {};

  if (!firstName) {
    errors.firstName = "First name is required";
  } else if (firstName.trim().length === 0) {
    errors.firstName = "First name is required";
  }

  if (!lastName) {
    errors.lastName = "Last name is required";
  } else if (lastName.trim().length === 0) {
    errors.lastName = "Last name is required";
  }

  if (!email) {
    errors.email = "Email is required";
  } else if (!validator.isEmail(email)) {
    errors.email = "Email is required";
  }

  if (!password) {
    errors.password = "Password is required";
  } else if (password.trim().length === 0) {
    errors.password = "Password is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
