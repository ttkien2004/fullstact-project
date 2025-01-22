const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const schema = mongoose.Schema;

const userSchema = new schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

// static signup method
userSchema.statics.signup = async function (email, password) {
	if (!email || !password) {
		throw Error("All fields must be filled");
	}
	if (!validator.isEmail(email)) {
		throw Error("Email is not valid");
	}
	// check if this email has already existed or not
	const exists = await this.findOne({ email: email });

	if (exists) {
		throw Error("This email has existed");
	}

	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);

	const user = await this.create({ email, password: hash });

	return user;
};
// static login method
userSchema.statics.login = async function (email, password) {
	if (!email || !password) {
		throw Error("All fields must be filled");
	}
	if (!validator.isEmail(email)) {
		throw Error("Email is not valid");
	}
	const exists = await this.findOne({ email });
	if (!exists) {
		throw Error("This email is not signed up!");
	}
	// check if password matches this email's password
	const match = await bcrypt.compare(password, exists.password);
	if (!match) {
		throw Error("Password is not correct");
	}
	return exists;
};
module.exports = mongoose.model("users", userSchema);
