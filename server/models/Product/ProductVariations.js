const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;

const productSchema = new Schema({
  product_alt_id: {
    type: ObjectId,
    required: true,
  },
  img_url: String,
  sizes: {},
});

module.exports = ProductVariations = model("PRODUCT_VARIATION", productSchema);
