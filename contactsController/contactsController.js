// // Temporary in-memory database
// let contacts = [];

// // CREATE
// exports.createContact = (req, res) => {
//     const { name, email, phone } = req.body;

//     // Basic validation (real projects use Joi/Yup)
//     if (!name || !email) {
//         return res.status(400).json({ message: "Name and email are required." });
//     }

//     const newContact = {
//         id: Date.now().toString(),
//         name,
//         email,
//         phone: phone || null
//     };
//        // Log the response
//     console.log("Contact Created:", newContact);

//     contacts.push(newContact);

//     res.status(201).json({
//         message: "Contact created successfully.",
//         data: newContact
//     });
// };

// // GET ALL
// exports.getContacts = (req, res) => {
//     res.status(200).json({
//         message: "All contacts retrieved.",
//         data: contacts
//     });
// };

// // GET SINGLE
// exports.getContactById = (req, res) => {
//     const contact = contacts.find(c => c.id === req.params.id);

//     if (!contact) {
//         return res.status(404).json({ message: "Contact not found." });
//     }

//     res.status(200).json({
//         message: "Contact retrieved.",
//         data: contact
//     });
// };

// // UPDATE
// exports.updateContact = (req, res) => {
//     const contactIndex = contacts.findIndex(c => c.id === req.params.id);

//     if (contactIndex === -1) {
//         console.log("Update failed, contact not found:", req.params.id);
//         return res.status(404).json({ message: "Contact not found." });
//     }

//     contacts[contactIndex] = {
//         ...contacts[contactIndex],
//         ...req.body
//     };
//         console.log("Contact updated:", contacts[contactIndex]);


//     res.status(200).json({
//         message: "Contact updated.",
//         data: contacts[contactIndex]
//     });
// };

// // DELETE
// exports.deleteContact = (req, res) => {
//     const contactIndex = contacts.findIndex(c => c.id === req.params.id);

//     if (contactIndex === -1) {
//           console.log("Delete failed, contact not found:", req.params.id);
//         return res.status(404).json({ message: "Contact not found." });
        
//     }

//     const deleted = contacts.splice(contactIndex, 1);
//         console.log("Contact deleted:", deleted[0]);


//     res.status(200).json({
//         message: "Contact deleted.",
//         deleted: deleted[0]
//     });
// };
// const Contact = require("../models/contact");

// // CREATE
// exports.createContact = async (req, res) => {
//     const contact = await Contact.create(req.body);
//     console.log("CREATED:", contact);
//     res.status(201).json(contact);
// };

// // GET ALL
// exports.getContacts = async (req, res) => {
//     const contacts = await Contact.find();
//     console.log("FETCHED ALL:", contacts.length);
//     res.status(200).json(contacts);
// };

// // GET ONE
// exports.getContactById = async (req, res) => {
//     const contact = await Contact.findById(req.params.id);
//     console.log("FETCHED ONE:", contact);
//     res.status(200).json(contact);
// };

// // UPDATE
// exports.updateContact = async (req, res) => {
//     const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     console.log("UPDATED:", contact);
//     res.status(200).json(contact);
// };

// // DELETE
// exports.deleteContact = async (req, res) => {
//     const contact = await Contact.findByIdAndDelete(req.params.id);
//     console.log("DELETED:", contact);
//     res.status(200).json({ message: "Deleted" });
// };
const Contact = require("../models/contact");

// CREATE
exports.createContact = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);
        console.log("CREATED:", contact);
        res.status(201).json(contact);
    } catch (error) {
        console.error("CREATE ERROR:", error.message);
        res.status(500).json({ message: "Server Error" });
    }
};

// GET ALL
exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        console.log("FETCHED ALL:", contacts.length);
        res.status(200).json(contacts);
    } catch (error) {
        console.error("GET ALL ERROR:", error.message);
        res.status(500).json({ message: "Server Error" });
    }
};

// GET ONE
exports.getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            console.warn("NOT FOUND:", req.params.id);
            return res.status(404).json({ message: "Contact not found" });
        }
        console.log("FETCHED ONE:", contact);
        res.status(200).json(contact);
    } catch (error) {
        console.error("GET ONE ERROR:", error.message);
        res.status(500).json({ message: "Server Error" });
    }
};

// UPDATE
exports.updateContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!contact) {
            console.warn("UPDATE FAILED, NOT FOUND:", req.params.id);
            return res.status(404).json({ message: "Contact not found" });
        }
        console.log("UPDATED:", contact);
        res.status(200).json(contact);
    } catch (error) {
        console.error("UPDATE ERROR:", error.message);
        res.status(500).json({ message: "Server Error" });
    }
};

// DELETE
exports.deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) {
            console.warn("DELETE FAILED, NOT FOUND:", req.params.id);
            return res.status(404).json({ message: "Contact not found" });
        }
        console.log("DELETED:", contact);
        res.status(200).json({ message: "Deleted" });
    } catch (error) {
        console.error("DELETE ERROR:", error.message);
        res.status(500).json({ message: "Server Error" });
    }
};
