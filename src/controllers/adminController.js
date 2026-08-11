const { users } = require("../data/db");

function listUsers(req, res) {
  return res.status(200).json({
    total: users.length,
    users: users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }))
  });
}

module.exports = {
  listUsers
};
