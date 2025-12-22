// const express = require('express');
// require('dotenv').config();
// // Database connection
// const connectDB = require("./config/db");
// connectDB(); // Connect to MongoDB
// const app = express();
// const port = process.env.PORT || 3000;
// app.use(express.json());

// const contactsRouter = require('./routes/contactsRouts');
// app.use(contactsRouter);

// app.listen(port, () => {
//     console.log(`express is running on  port  ${port}`);
// })
const express = require("express");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactsRouts");
const authRoutes = require("./routes/authRoutes");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Connect MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/contacts", contactRoutes);
app.use("/api/auth",authRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Global error handling (optional for production) Log errors
// app.use((err, req, res, next) => {
//     console.error("GLOBAL ERROR:", err);
//     res.status(500).json({ message: "Something went wrong!" });
// });

// Production-ready error handling



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
