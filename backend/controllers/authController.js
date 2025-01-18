const jwt = require("jsonwebtoken");
const userModel = require("../models/auth");

// create token
const createToken = (user_id) => {
  return jwt.sign({ user_id }, process.env.SECRET, { expiresIn: "3d" });
};
// login method
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token, message: "Login successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
// signup method
const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.signup(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token, message: "Signup successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  login,
  signup,
};
