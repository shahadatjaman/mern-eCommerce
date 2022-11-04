const ProductVariations = require("../../models/Product/ProductVariations");

module.exports = {
  async createProductSize(req, res) {
    let { product_alt_id, sizes } = req.body;

    let product_variations = await ProductVariations.findById(product_alt_id);
    if (!product_variations) {
    }
  },
};
