const User = require("../models/User");

const useValidation = require("../validation/userValidation");

const loginValidation = require("../validation/loginValidation");

const newToken = require("../helper/jwtGenerator ");

module.exports = {
  async register(req, res) {
    const { firstName, lastName, email, password } = req.body;

    // User Validation checks
    const { errors, isValid } = useValidation({
      firstName,
      lastName,
      email,
      password,
    });

    if (!isValid) {
      return res.status(400).json({ errors });
    }

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      createdAt: new Date().toISOString(),
    });
    const user = await newUser.save();

    const token = newToken({
      _id: user._id,
      firstName,
      lastName,
      email,
      password,
    });

    return res.status(200).json({
      message: "Successfully created",
      token,
    });
  },
  async login(req, res) {
    const { email, password } = req.body;

    // User Validation checks
    const { errors, isValid } = loginValidation({ email, password });

    if (!isValid) {
      return res.status(400).json({ errors });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        errors: "Invalid Email or Password, Try Again!",
      });
    }

    const token = newToken({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email,
    });

    res.status(200).json({
      message: "Login Successfully done!",
      token,
    });
  },
};
