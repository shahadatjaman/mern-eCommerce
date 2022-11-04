const { Schema, model, Decimal128 } = require("mongoose");
const { ObjectId } = Schema.Types;

const product_variations_options_schema = new Schema({
  product_variations_id: ObjectId,
  variations_name: String,
  sku: Object,
  price: Decimal128,
});

module.exports = ProductVariationsOptions = model(
  "PRODUCT_VARIATION_OPTIONS",
  product_variations_options_schema
);
