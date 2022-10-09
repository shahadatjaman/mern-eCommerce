const router = require("express").Router();

const { adduser, login } = require("../../controller/user/");

const {
  addUserValidators,
  addUserValidatorHandler,
  loginValidator,
} = require("../../middleware/users/userValidator");

// Add user
router.post("/register", addUserValidators, addUserValidatorHandler, adduser);

router.post("/login", loginValidator, login);

module.exports = router;
