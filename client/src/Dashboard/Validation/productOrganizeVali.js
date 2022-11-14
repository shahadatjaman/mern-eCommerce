export const productOrganizationValidation = (value) => {
  const errors = {};

  if (!value.category) {
    errors.category = "category is required!";
  }

  return { errors };
};
