import validator from "validator";

export const validation = ({ firstName, lastName, email }) => {
  let errors = {};

  if (!firstName) {
    errors.firstName = "First is name required!";
  }

  if (!lastName) {
    errors.lastName = "Last name is required!";
  }
  if (!email) {
    errors.email = "Email address is required!";
  } else if (!validator.isEmail(email)) {
    errors.email = "Email address must be valid!";
  }

  return { errors };
};
