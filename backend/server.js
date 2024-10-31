const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db');
const app = express();
connectDB();
app.use(express.json());
app.use('/api/posts', postRoutes);
app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running');
});
