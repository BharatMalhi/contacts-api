const express = require('express');
require('dotenv').config();
// Database connection
const connectDB = require("./config/db");
connectDB(); // Connect to MongoDB
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

const contactsRouter = require('./routes/contactsRouts');
app.use(contactsRouter);

app.listen(port, () => {
    console.log(`express is running on  port  ${port}`);
})
