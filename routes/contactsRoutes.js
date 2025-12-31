
// module.exports = router;
// const express = require('express');
// const router = express.Router();
// const contactsController = require('../contactsController/contactsController');

// // Create new contact
// router.post('/api/contacts', contactsController.createContact);

// // Get all contacts
// router.get('/api/contacts', contactsController.getContacts);

// // Get single contact by ID
// router.get('/api/contacts/:id', contactsController.getContactById);

// // Update contact by ID
// router.put('/api/contacts/:id', contactsController.updateContact);

// // Delete contact by ID
// router.delete('/api/contacts/:id', contactsController.deleteContact);

// module.exports = router;
// const express = require("express");
// const router = express.Router();
// const controller = require("../contactsController/contactsController");
// const validate = require("../middleware/validate");
// const { createUserSchema, updateUserSchema } = require("../validators/contactValidator");

// router.post("/", validate(createUserSchema),controller.createUser);
// router.get("/", controller.getUsers);
// router.get("/:id", controller.getUserById);
// router.put("/:id",validate(updateUserSchema),controller.updateUser);
// router.delete("/:id", controller.deleteUser);

// module.exports = router;
const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require("../controller/contactsController");

// /api/contacts
router
  .route("/",protect)
  .get(getUsers)
  .post(createUser);

// /api/contacts/:id
router
  .route("/:id")
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
