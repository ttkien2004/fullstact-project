const express = require("express");
const { login, signup } = require("../controllers/authController");

const router = express.Router();

router.post("/auth/login", login);
router.post("/auth/signup", signup);

module.exports = router;
