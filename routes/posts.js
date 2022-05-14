import express from 'express';
import Post from '../models/Post.js';

const router = express.Router();

// Get all the post from Post
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// Get specific post
router.get('/:postId', async (req, res) => {
  try {
    const viewPost = await Post.find({ _id: req.params.postId });
    res.status(200).json(viewPost);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

// Create New Post
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savePost = await post.save();
    res.status(200).json(savePost);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// Delete Specific Post
router.delete('/:postId', async (req, res) => {
  try {
    const deletePost = await Post.remove({ _id: req.params.postId });
    res.status(200).json(deletePost);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

export default router;
