const Post = require('../models/Post');
const path = require('path');
exports.getAllPosts = async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
};
exports.adminDashboard = async (req, res) => {
    res.sendFile(path.join(__dirname, '../views/admin/dashboard.html'));
};
exports.editPostPage = async (req, res) => {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    res.sendFile(path.join(__dirname, '../views/admin/editPost.html'));
};
exports.createPost = async (req, res) => {
    const { title, content } = req.body;
    const post = new Post({ title, content });
    await post.save();
    res.redirect('/api/posts/admin/dashboard');
};
exports.updatePost = async (req, res) => {
    const postId = req.params.id;
    await Post.findByIdAndUpdate(postId, req.body);
    res.redirect('/api/posts/admin/dashboard');
};
exports.deletePost = async (req, res) => {
    const postId = req.params.id;
    await Post.findByIdAndDelete(postId);
    res.redirect('/api/posts/admin/dashboard');
};
