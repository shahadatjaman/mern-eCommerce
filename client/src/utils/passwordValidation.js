export const passwordVlidation = (values) => {
  const errors = {};

  let strongPassword = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
  );

  if (!values.password) {
    errors.password = "Password is required";
  }

  if (!values.new_password) {
    errors.new_password = "New password is required";
  } else if (!strongPassword.test(values.new_password)) {
    errors.new_password =
      "New Password must be at least 8 and should contain at least 1 lowercase, 1 upperCase, 1 number and 1 symbol!";
  }
  return {
    errors,
  };
};
