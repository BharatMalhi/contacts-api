const express = require("express");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactsRoutes");
const authRoutes = require("./routes/authRoutes");
const pageRoutes = require("./routes/paginationRoutes");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Connect MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/contacts", contactRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/pagination", pageRoutes);

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
