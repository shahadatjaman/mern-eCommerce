const bcrypt = require("bcryptjs");

const createError = require("http-errors");

const User = require("../../models/User");

const newToken = require("../../helper/jwtGenerator ");

module.exports = {
  async adduser(req, res) {
    const { username, avatar, email, password } = req.body;

    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        return res.status(500).json({
          errors: "Servr error occurs!",
        });
      } else {
        if (avatar) {
          // If avatar provided
          const newUser = new User({
            username,
            avatar,
            email,
            password: hash,
            createdAt: new Date().toISOString(),
          });

          const user = await newUser.save();

          const token = newToken({
            _id: user._id,
            username,
            avatar,
            email,
          });

          return res.status(200).json({
            message: "Successfully created",
            token,
          });
        } else {
          // If avatar isn't provided
          const newUser = new User({
            username,
            email,
            password,
            createdAt: new Date().toISOString(),
          });

          const user = await newUser.save();

          const token = newToken({
            _id: user._id,
            username,
            email,
          });

          return res.status(200).json({
            message: "Successfully created",
            token,
          });
        }
      }
    });
  },
  async login(req, res) {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user) {
      bcrypt.compare(password, user.password, (err, isvalid) => {
        if (err) {
          throw createError(err);
        }

        if (isvalid) {
          const token = newToken({
            _id: user._id,
            username: user.username,
            email: user.email,
          });
          return res.status(200).json({
            token,
          });
        } else {
          return res.status(400).json({
            message: "Your email or password is incorrect",
          });
        }
      });
    } else {
      return res.status(401).json({
        errors: {
          message: "Invalid User",
        },
      });
    }
  },
};
