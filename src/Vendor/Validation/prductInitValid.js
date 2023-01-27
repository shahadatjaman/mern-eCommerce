export const productInitValidation = (value) => {
  const errors = {};

  if (!value.name) {
    errors.name = "Name is required!s";
  }
  if (!value.price) {
    errors.price = "price is required!s";
  }

  if (value.price <= 0) {
    errors.price = "price is required!s";
  }

  return {
    errors,
  };
};
