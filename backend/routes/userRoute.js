const express = require("express");
const { Login, Signup } = require("../controllers/userController");

const routes = express.Router();

// signup
routes.post("/signup", Signup);
// login
routes.post("/login", Login);

module.exports = routes;
