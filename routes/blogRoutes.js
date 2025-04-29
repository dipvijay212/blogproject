const express = require('express');
const router = express.Router();
const {
  getAllBlogs,
  getBlogsById,
  createBlog,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogController');

const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

// Public routes
router.get('/', getAllBlogs);
router.get('/:id', getBlogsById);

// Admin protected routes
router.post('/', authMiddleware, adminMiddleware, createBlog);
router.put('/:id', authMiddleware, adminMiddleware, updateBlog);
router.delete('/:id', authMiddleware, adminMiddleware, deleteBlog);

module.exports = router;
