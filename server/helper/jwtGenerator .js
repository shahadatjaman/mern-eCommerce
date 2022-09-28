const jwt = require("jsonwebtoken");

module.exports = ({ _id, firstName, lastName, email }) => {
  const token = jwt.sign(
    {
      _id,
      firstName: firstName,
      lastName: lastName,
      email: email,
    },
    process.env.SECRET_KEY,
    { expiresIn: "72h" }
  );

  return token;
};
