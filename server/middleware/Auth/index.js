const passport = require("passport");

module.exports = {
  async checkVendor(req, res, next) {
    passport.authenticate("jwt", (error, user, info) => {
      if (error) {
        return next(error);
      }
      if (!user) {
        return res.status(401).json({
          message: "Authentication Failed",
        });
      }

      if (user.role !== "vendor") {
        return res.status(401).json({
          message: "Access not allowed",
        });
      }

      req.user = user;

      return next();
    })(req, res, next);
  },
};
