const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const path = require('path');
router.get('/admin/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
});
router.get('/admin/dashboard', postController.adminDashboard);
router.get('/admin/edit/:id', postController.editPostPage);
router.post('/admin/create', postController.createPost);
router.post('/admin/edit/:id', postController.updatePost);
router.post('/admin/delete/:id', postController.deletePost);
router.get('/', postController.getAllPosts);
module.exports = router;
