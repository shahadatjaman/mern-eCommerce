export const newPassValid = (values) => {
  const errors = {};

  let strongPassword = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
  );

  if (!values.new_pass) {
    errors.new_pass = "Please enter an new password";
  } else if (!strongPassword.test(values.new_pass)) {
    errors.new_pass =
      "New Password must be at least 8 and should contain at least 1 lowercase, 1 upperCase, 1 number and 1 symbol!";
  }

  if (!values.confirm_pass) {
    errors.confirm_pass = "Confirm password is required!";
  }

  if (values.new_pass !== values.confirm_pass) {
    errors.confirm_pass = "New password and Confirm password must be same!";
  }

  return {
    errors,
  };
};
