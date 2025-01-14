const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  // verify authentication
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json("Authorization is needed");
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);

    req.user = await userModel.findOne({ _id }).select({ _id });

    next();
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

module.exports = {
  requireAuth,
};
