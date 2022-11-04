const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;

const productSchema = new Schema({
  user_id: {
    type: ObjectId,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  short_desc: {
    type: String,
    required: true,
    trim: true,
  },
  long_desc: {
    type: String,
    required: true,
    trim: true,
  },

  createdAt: {
    type: String,
    required: true,
    trim: true,
  },
  updatedAt: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = Product = model("PRODUCT", productSchema);
