const router = require("express").Router();

const {
  addCustomUser,
  addSocialUser,
  login,
} = require("../../controller/user/");

const {
  addUserValidators,
  addUserValidatorHandler,
  loginValidator,
} = require("../../middleware/users/userValidator");

// Add user
router.post(
  "/register",
  addSocialUser,
  addUserValidators,
  addUserValidatorHandler,

  addCustomUser
);

router.post("/login", loginValidator, login);

module.exports = router;
