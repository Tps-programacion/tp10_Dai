const express = require("express");
const { listUsers } = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/all", authMiddleware, isAdmin ,listUsers);

module.exports = router;
