const User = require("../models/User");
const asyncHandler = require("../middleware/asyncHandler"); // Import asyncHandler

// CREATE Task
exports.createUser = asyncHandler(async (req, res) => {
    const user = await User.create(req.body);
    console.log("CREATED:", user);
    res.status(201).json(user);
});

// GET ALL Task
exports.getUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    console.log("FETCHED ALL:", users.length);
    res.status(200).json(users);
});

// GET ONE Task
exports.getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        console.warn("NOT FOUND:", req.params.id);
        return res.status(404).json({ message: "User not found" });
    }
    console.log("FETCHED ONE:", user);
    res.status(200).json(user);
});

// UPDATE Task
// controllers/userController.js
exports.updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }

    // 🔐 Ownership check
    if (user.user_id.toString() !== req.user._id.toString()) {
        res.status(403);
        throw new Error("Not authorized to update this user");
    }

    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.status(200).json(updatedUser);
});


// DELETE Task
exports.deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    // 🔐 Ownership check
    if (user.user_id.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: "Not authorized to delete this user" });
    }

    await user.deleteOne();

    res.status(200).json({ message: "Deleted" });
});


