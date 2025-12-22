
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
// const { createContactSchema, updateContactSchema } = require("../validators/contactValidator");

// router.post("/", validate(createContactSchema),controller.createContact);
// router.get("/", controller.getContacts);
// router.get("/:id", controller.getContactById);
// router.put("/:id",validate(updateContactSchema),controller.updateContact);
// router.delete("/:id", controller.deleteContact);

// module.exports = router;
const express = require("express");
const router = express.Router();

const {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact
} = require("../controllers/contactController");

// /api/contacts
router
  .route("/")
  .get(getContacts)
  .post(createContact);

// /api/contacts/:id
router
  .route("/:id")
  .get(getContactById)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
