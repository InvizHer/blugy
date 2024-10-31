const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded data

app.use(express.static(path.join(__dirname, '../frontend'))); // Serve static files from the frontend directory

app.use('/api/posts', postRoutes); // API routes for posts

// Serve the index.html file at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
