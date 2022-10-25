const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  thumbnail_image: {
    type: String,
    required: true,
  },
  hover_image: {
    type: String,
    required: true,
  },
  total_review: {
    type: Number,
    required: true,
  },
  pricing: {
    current_price: Number,
    old_price: Number,
    discount: Number,
  },
  short_description: String,
  long_description: String,
  options: {
    weight: Number,
    dimensions: {
      h: Number,
      w: Number,
      l: Number,
    },
    colors: [{ color: String, size: Array }],
  },
  categorie: String,
  tags: Array,
  small_images: Array,
  share_link: [
    {
      icon: String,
      url: String,
    },
  ],
});

module.exports = Product = model("Product", productSchema);
