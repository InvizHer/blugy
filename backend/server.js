const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api/posts', postRoutes);
app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running');
});
