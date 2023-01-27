export const useValidator = (values) => {
  const errors = {};

  let strongPassword = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
  );

  if (!values.firstName) {
    errors.firstName = "First name is required";
  }
  if (!values.lastName) {
    errors.lastName = "Last name is required";
  }
  // else if (values.firstName) {
  //   errors.username = "Username is must contain at least one number!";
  // }
  if (!values.vendorName) {
    errors.vendorName = "Vendor Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (!strongPassword.test(values.password)) {
    errors.password =
      "Password must be at least 8 and should contain at least 1 lowercase, 1 upperCase, 1 number and 1 symbol!";
  }
  return {
    errors,
  };
};
