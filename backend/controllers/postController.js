const Post = require('../models/Post');
const getAllPosts = async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
};
const createPost = async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.json(post);
};
const editPost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(post);
};
const deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: 'Post deleted' });
};
module.exports = { getAllPosts, createPost, editPost, deletePost };
