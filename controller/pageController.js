const asyncHandler = require("../middleware/asyncHandler");
const Contact = require("../models/ContactPaginationTest");

// @desc    Get all contacts (paginated)
// @route   GET /api/contacts
// @access  Private
exports.getContacts = asyncHandler(async (req, res) => {
    // 1. Read query params with defaults
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    // 2. Calculate skip value
    const skip = (page - 1) * limit;

    // 3. Fetch contacts belonging to logged-in user
    const contacts = await Contact.find({ user_id: req.user._id })
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 });

    // 4. Get total count (for frontend pagination)
    const total = await Contact.countDocuments({ user_id: req.user._id });

    // 5. Response
    res.status(200).json({
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        count: contacts.length,
        data: contacts,
    });
});
