const UserModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Create token
const createToken = (id) => {
    return jwt.sign({id}, process.env.SECRET, {expiresIn: '3d'});
}
// login user
const loginUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await UserModel.login(email, password);
        // create token
        const token = createToken(user._id);
        res.status(200).json({email, token});
    } catch (err) {
        res.status(400).json({mssg: err.message})
    }
}
// signup user
const signupUser = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await UserModel.signup(email, password);
        // create token
        const token = createToken(user._id);

        res.status(200).json({email, token});
    } catch (err) {
        res.status(400).json({mssg: err.message})
    }    
}

module.exports = {
    loginUser,
    signupUser
}