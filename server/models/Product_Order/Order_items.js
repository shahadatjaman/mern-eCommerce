const { model, Schema } = require("mongoose");
const { ObjectId } = Schema.Types;

const orderSchema = new Schema({
  order_id: {
    type: ObjectId,
    required: true,
  },
  product_id: {
    type: ObjectId,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: String,
    required: true,
  },
});

module.exports = OrderItems = model("orderitem", orderSchema);
