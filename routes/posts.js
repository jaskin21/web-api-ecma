import express from 'express';
import Post from '../models/Post.js';

const router = express.Router();

// Get all the post from Post
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
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
    res.json(savePost);
  } catch (error) {
    res.json({ message: error });
  }
});

// Delete Specific Post
router.delete('/:postId', async (req, res) => {
  try {
    const deletePost = await Post.remove({ _id: req.params.postId });
    res.json(deletePost);
  } catch (error) {
    res.json({ message: error });
  }
});

export default router;
