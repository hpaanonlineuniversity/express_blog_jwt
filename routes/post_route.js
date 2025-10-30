const post_controller = require('../controllers/post_controller');
const express = require('express');
const router = express.Router();

// Create a new post    
router.post('/', post_controller.createPost);

// Get all posts
router.get('/', post_controller.getAllPosts);

// Get a single post by ID
router.get('/:id', post_controller.getPostById);

// Update a post by ID
router.put('/:id', post_controller.updatePost);

// Delete a post by ID
router.delete('/:id', post_controller.deletePost);

module.exports = router;