const express = require('express');
const router = express.Router();
const { getContacts } = require('../controller/pageController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getContacts);

module.exports = router;