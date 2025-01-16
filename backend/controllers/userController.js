const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

// create token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "3d" });
};
// signup method
const Signup = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.signup(username, password);
    const token = createToken(user._id);

    res.status(200).json({ data: { username, token } });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
// login method
const Login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.login(username, password);
    const token = createToken(user._id);
    res.status(200).json({ data: { username, token } });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  Signup,
  Login,
};
