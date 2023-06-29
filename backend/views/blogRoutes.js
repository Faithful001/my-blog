const express = require('express')

const router = express.Router()

const {getBlogs, getBlog, createBlog, deleteBlog, updateBlog} = require('../controllers/blogController')


//get all blogs
router.get('/', getBlogs)

//get a single blog
router.get('/:id', getBlog)

//post a blog
router.post('/', createBlog)

//delete a blog
router.delete('/:id', deleteBlog)

//edit a blog
router.patch('/:id', updateBlog)

module.exports = router;