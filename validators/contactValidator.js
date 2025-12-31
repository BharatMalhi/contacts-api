const joi = require('joi');
// Schema for creating a user
const createUserSchema = joi.object({
    name: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    phone: joi.string().pattern(/^[+]?[\d\s-]{10,20}$/).required(),
    message: joi.string().min(10).max(500).required()
});

// Schema for creating a user
const updateUserSchema = joi.object({
    name: joi.string().min(3).max(30),
    email: joi.string().email(),
    phone: joi.string().pattern(/^[+]?[\d\s-]{10,20}$/),
    message: joi.string().min(10).max(500)
}).min(1); // At least one field must be provided for update

module.exports = {
    createUserSchema,
    updateUserSchema
};