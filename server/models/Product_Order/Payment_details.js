const { model, Schema } = require("mongoose");
const { ObjectId } = Schema.Types;

const orderSchema = new Schema({
  order_id: {
    type: ObjectId,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    integer: true,
    required: true,
  },

  provider: {
    type: String,
    required: true,
  },
  createdAt: String,
  updatedAt: String,
});

module.exports = Payment = model("paymentDetail", orderSchema);
