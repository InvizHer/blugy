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
app.use('/api/posts', postRoutes);

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Serve the index.html file on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Serve admin login page
app.get('/admin/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../backend/views/login.html'));
});

// Serve admin dashboard page
app.get('/admin/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../backend/views/admin/dashboard.html'));
});

// Serve edit post page
app.get('/admin/edit/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../backend/views/admin/editPost.html'));
});

// Fallback route for other static files
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running');
});
