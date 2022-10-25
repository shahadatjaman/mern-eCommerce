const paymentDetailsValidator = require("../../validation/paymentDetailsValidator");

const Payment = require("../../models/Product_Order/Payment_details");

module.exports = {
  async paymnetDetails(req, res, next) {
    const { _id } = req.user;

    const { order_id, amount, total, provider } = req.body;
    const { errors, isValid } = paymentDetailsValidator({
      order_id,
      amount,
      total,
      provider,
    });

    if (!isValid) {
      return res.status(400).json({ errors });
    }

    const newPayment = await Payment({
      order_id,
      amount,
      total,
      provider,
    });

    await newPayment.save();
    return next();
  },
};
