module.exports = ({ order_id, amount, total, provider }) => {
  const errors = {};

  if (!order_id) {
    errors.order_id = "OrderId is required";
  }
  if (!amount) {
    errors.amount = "Amount is required";
  }
  if (!total) {
    errors.total = "Toatal is required";
  }
  if (!provider) {
    errors.provider = "Provider is required";
  }

  return { errors, isValid: Object.keys(errors).length === 0 };
};
