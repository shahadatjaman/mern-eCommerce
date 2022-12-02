const router = require("express").Router();
const { authUser } = require("../../middleware/Auth/");

const { creareOrder, getOrder } = require("../../controller/Admin/order");
const {
  orderValidation,
  orderValidatorHandler,
} = require("../../middleware/Validator/order/");

router.post(
  "/createorder",
  authUser,
  orderValidation,
  orderValidatorHandler,
  creareOrder
);

// Get order by _id
router.get("/getorder/:order_id", authUser, getOrder);

module.exports = router;
