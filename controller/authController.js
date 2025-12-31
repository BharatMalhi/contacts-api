const asyncHandler = require("../middleware/asyncHandler");
const bcrypt = require("bcryptjs");
const User = require("../models/User"); // ← correct import
const generateToken = require("../utils/generateToken");

// Signup / Register
exports.registerUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ email, password });

    if (user) {
        res.status(201).json({
            _id: user._id,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(400).json({ message: "Invalid user data" });
    }
});


// Login
exports.loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        res.status(401);
        throw new Error("Invalid email or password");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        res.status(401);
        throw new Error("Invalid email or password");
    }

    res.json({
        _id: user._id,
        email: user.email,
        token: generateToken(user._id),
    });
});