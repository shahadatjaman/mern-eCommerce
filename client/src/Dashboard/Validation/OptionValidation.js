export const colorValidation = (value) => {
  const errors = {};

  if (!value.color) {
    errors.color = "Color is required";
  }

  return {
    errors,
  };
};

export const sizeValidation = (value) => {
  const errors = {};

  if (!value.size) {
    errors.size = "Size is required";
  }
  if (!value.price) {
    errors.price = "Price is required";
  }

  return {
    errors,
  };
};
