const User = require("../models/User");
const generateToken = require("../utils/generateToken");

// Signup / Register
exports.registerUser = async (req, res) => {
    const { email, password } = req.body;

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    // Create user
    const user = await User.create({ email, password });

    if (user) {
        res.status(201).json({
            _id: user._id,
            email: user.email,
        });
    } else {
        res.status(400).json({ message: "Invalid user data" });
    }
};
