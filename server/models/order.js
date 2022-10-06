const { Schema, model } = require("mongoose");

const ordersChema = new Schema({
  fristName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  town_city: {
    type: String,
    required: true,
  },
  state_country: {
    type: String,
    required: true,
  },
  postcode_zip: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  email: {
    type: Number,
    require: true,
  },
  order_note: {
    type: String,
    required: true,
  },
});

module.exports = User = ("order", ordersChema);
