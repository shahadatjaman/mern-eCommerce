export const useValidator = (values) => {
  const errors = {};

  let strongPassword = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
  );

  if (!values.username) {
    errors.username = "Username is required";
  } else if (!values.username.match(/\d/g)) {
    errors.username = "Username is must contain at least one number!";
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
