const mongoose = require("mongoose");

const Product = require("../../models/Product/Product");

const productValidator = require("../../validation/productValidator");

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
  async product(req, res) {
    const { id } = req.params;

    const isValid = mongoose.Types.ObjectId.isValid(id);

    if (!isValid) {
      return res.status(400).json({
        message: "Invalid product id",
      });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      product,
    });
  },
};
