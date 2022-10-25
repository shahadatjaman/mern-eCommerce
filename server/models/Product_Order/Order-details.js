const { model, Schema } = require("mongoose");

const { ObjectId } = Schema.Types;

const orderSchema = new Schema({
  order_id: {
    type: ObjectId,
    required: true,
  },
  user_id: {
    type: ObjectId,
    required: true,
  },
  attribute: {
    color: String,
    size: String,
  },
  total: {
    type: Number.parseInt(Schema.Types.Integer),
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  payment_id: {
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

module.exports = OrderDetails = model("orderDetail", orderSchema);
