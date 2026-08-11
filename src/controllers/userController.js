const { users } = require("../data/db");
const User = require("../entities/user");

function getProfile(req, res) {
  const user = users.find((u) => u.id === req.user.id);

  if (!user) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  return res.json({ user: new User(user.id, user.email, user.name, user.role) });
}

function updateMe(req, res) {
  const userId = req.user.id;
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  const { name } = req.body;
  user.name = name || user.name;

  return res.status(200).json({ message: "Perfil actualizado", user: new User(user.id, user.email, user.name, user.role)   });
}

module.exports = {
  getProfile,
  updateMe
};
