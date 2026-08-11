const jwt = require("jsonwebtoken");

function signToken(user) {
  return jwt.sign(
    { role: user.role, id: user.id},
    process.env.JWT_SECRET || "super-secret",
    { expiresIn: "2h" }
  );
}

module.exports = {
  signToken
};
