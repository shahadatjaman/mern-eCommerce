const { check, validationResult } = require("express-validator");

const categoreisValidator = [
  check("category_name")
    .isLength({ min: 1 })
    .withMessage("Product categiry name is required!")
    .trim(),
  check("product_id")
    .isMongoId()
    .withMessage("Product id should be valid!")
    .trim(),
];

const categoriesValidatorHandler = (req, res, next) => {
  const errors = validationResult(req);
  const mappedErrors = errors.mapped();

  if (Object.keys(mappedErrors).length === 0) {
    next();
  } else {
    res.status(400).json({
      errors: mappedErrors,
    });
  }
};

module.exports = {
  categoreisValidator,
  categoriesValidatorHandler,
};
