const jwt = require("jsonwebtoken");
const userModel = require("../models/auth");

const requireAuth = async (req, res, next) => {
	// verify authentication
	const { authorization } = req.headers;

	if (!authorization) {
		res.status(401).json({ error: "Authorization is needed" });
	}

	// authorization: Bearer token
	// token: ['Bearer', token]
	const token = authorization.split(" ")[1];

	try {
		const { user_id } = jwt.verify(token, process.env.SECRET);
		req.user = await userModel.findOne({ _id: user_id }).select("_id");

		next();
	} catch (err) {
		res.status(401).json({ error: err.message });
	}
};

module.exports = { requireAuth };
