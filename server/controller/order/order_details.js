const PaymentDetails = require("../../models/Product_Order/Payment_details");

module.export = {
  async order_details(req, res, next) {
    let { order_id, user_id, total, status, payment_id } = req.body;

    const paymentdetails = await PaymentDetails.findOne({ order_id });

    if (!paymentdetails) {
      const newOrderDetails = new PaymentDetails({
        order_id,
        user_id,
        total,
        status,
        payment_id,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });

      await newOrderDetails.save();
      return next();
    } else {
      return next();
    }
  },
};
