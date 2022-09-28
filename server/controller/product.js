const Product = require("../models/Product");

const productValidator = require("../validation/productValidator");

module.exports = {
  async createProduct(req, res) {
    const {
      title,
      thumbnail_image,
      hover_image,
      total_review,
      pricing,
      short_description,
      long_description,
      options,
      categorie,
      tags,
      small_images,
      share_link,
    } = req.body;
    const { errors, isValid } = productValidator(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newProduct = new Product({
      title,
      thumbnail_image,
      hover_image,
      total_review,
      pricing,
      short_description,
      long_description,
      options,
      categorie,
      tags,
      small_images,
      share_link,
    });

    const product = await newProduct.save();

    res.status(200).json({
      message: "Product saved successfully",
      product,
    });
  },
  async products(req, res) {
    const products = await Product.find();

    if (!products) {
      return res.status(404).json({
        message: "No products found",
      });
    }

    res.status(200).json({
      products,
    });
  },
};
