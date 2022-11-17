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
  getCategories,
  removeTag,
  removeVariation,
  createDiscount,
  inventory,
  getProducts,
  getInventory,
  getDiscount,
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

// Discount Validation middleware
const {
  discountValidatorHandler,
  discountValidation,
} = require("../../middleware/Validator/discountValidations");

// Qunatity validation middleware
const {
  quantityValidation,
  quantityValidatorHandler,
} = require("../../middleware/Validator/invantoryValidation");

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

// Get categories
router.get("/getcategories", checkVendor, getCategories);

// Create a product tag
router.post("/createtag", tagValidator, tagValidatorHandler, createTag);

// Remove tag
router.post("/romvetag", checkVendor, removeTag);

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

// Remove variation
router.post("/removevariation", checkVendor, removeVariation);

// Product variation Options
router.post(
  "/variationoption",
  checkVendor,
  variationOptionsValidator,
  variationOptionsValidatorHandler,
  productVariationsOptions
);

// Create a new discount
router.post(
  "/creatediscount/:product_id",
  checkVendor,
  discountValidation,
  discountValidatorHandler,
  createDiscount
);

// Create a inventory
router.post(
  "/inventory/:product_id",
  checkVendor,
  quantityValidation,
  quantityValidatorHandler,
  inventory
);

// Delete a product
router.delete(
  "/deleteproduct/:product_id",
  checkVendor,
  delProductValidator,
  delPorductValidatorHandler,
  deleteProduct
);

// get products
router.get("/getproducts", checkVendor, getProducts);

// Get inventory
router.get("/getinventory/:product_id", checkVendor, getInventory);

// Get product discount
router.get("/getdiscount/:product_id", checkVendor, getDiscount);

module.exports = router;
