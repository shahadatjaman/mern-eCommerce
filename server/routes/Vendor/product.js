const router = require("express").Router();
const {
  createEmptyProduct,
  createCategories,
  createTag,
  createShareLink,
  productVariations,
  deleteProduct,
  createProduct,
  productVariationsOptions,
} = require("../../controller/Vendor/product");

// Authentication checks middleware
const { checkVendor } = require("../../middleware/Auth/");

// Product input validation middleware
const {
  productValidator,
  productValidatorHandler,
} = require("../../middleware/Validator/productValidations");

// Product category validation middleware
const {
  categoreisValidator,
  categoriesValidatorHandler,
} = require("../../middleware/Validator/categoriesValidations");

// Product tag validation middleware
const {
  tagValidator,
  tagValidatorHandler,
} = require("../../middleware/Validator/productTagValidation");

// Product share link validation middleware
const {
  shareLinkValidator,
  shareLinkValidatorHandler,
} = require("../../middleware/Validator/productShareLink");
// Product variation validation middleware
const {
  variationValidator,
  variationValidatorHandler,
} = require("../../middleware/Validator/productVariations");

// Product variation validation middleware
const {
  variationOptionsValidator,
  variationOptionsValidatorHandler,
} = require("../../middleware/Validator/variationOptions");

// Delete product
const {
  delProductValidator,
  delPorductValidatorHandler,
} = require("../../middleware/Validator/deleteProduct");

// Create a new empty product
router.get("/createemptyproduct", checkVendor, createEmptyProduct);

// Create a new product
router.post(
  "/createproduct",
  checkVendor,
  productValidator,
  productValidatorHandler,
  createProduct
);

// Create a new product category
router.post(
  "/createcategory",
  checkVendor,
  categoreisValidator,
  categoriesValidatorHandler,
  createCategories
);

// Create a product tag
router.post("/createtag", tagValidator, tagValidatorHandler, createTag);

// Create share_link
router.post(
  "/createsharelink",
  checkVendor,
  shareLinkValidator,
  shareLinkValidatorHandler,
  createShareLink
);

// Product variation
router.post(
  "/productvariation",
  checkVendor,
  variationValidator,
  variationValidatorHandler,
  productVariations
);

// Product variation Options
router.post(
  "/variationoption",
  checkVendor,
  variationOptionsValidator,
  variationOptionsValidatorHandler,
  productVariationsOptions
);

// Delete a product
router.post(
  "/deleteproduct",
  checkVendor,
  delProductValidator,
  delPorductValidatorHandler,
  deleteProduct
);
module.exports = router;
