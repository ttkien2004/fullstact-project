const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
});

// static signup method
userSchema.statics.signup = async function (email, password) {
  // validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  const exists = await this.findOne({ username: email });

  if (exists) {
    throw Error("This email has existed!");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ username: email, password: hash });

  return user;
};
// static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  const user = await this.findOne({ username: email });

  if (!user) {
    throw Error("email is not correct");
  }

  // Check if password matches to this username
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Password is not correct");
  }
  return user;
};
module.exports = mongoose.model("user", userSchema);
