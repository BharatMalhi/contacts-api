const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
    return jwt.sign(
        { id: userId },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    );
    
};
console.log("JWT_SECRET:", process.env.JWT_SECRET);
module.exports = generateToken;
