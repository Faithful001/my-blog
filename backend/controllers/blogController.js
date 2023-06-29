const Blogs = require('../models/blogModel')
const mongoose = require('mongoose')

const getBlogs = async (req, res)=>{
    const blogs = await Blogs.find({}).sort({createdAt: -1})
    res.status(200).json(blogs)
}

const getBlog = async (req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({err: "no such blog"})
    }
    const blog = await Blogs.findById({_id: id})
    if (!blog){
        res.status(404).json({err: "no such blog"})
    }else{
        res.status(200).json(blog)
    }
}

const createBlog  = async(req, res)=>{
    const {title, author, desc} = req.body
    try{
        const blog = await Blogs.create({title, author, desc});
        res.status(200).json(blog)
    }catch(err){
        res.status(400).json({err: "an error occured"})
    }
}

const deleteBlog = async (req, res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({err: 'no such blog'})
    }
    const blog = await Blogs.findOneAndDelete({_id: id})
    if(!blog){
        res.status(404).json({err: 'no such blog'})
    }else{
        res.status(200).json(blog)
    }
}

const updateBlog = async (req, res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({err: 'no such blog'})
    }
        const {title, author, desc} = req.body
        const blog = await Blogs.findOneAndUpdate({_id: id}, {title, author, desc});

    if(!blog){
        return res.status(404).json({err: 'no such workout'})
    }else{
        res.status(200).json(blog)
    }
}

module.exports = {getBlogs, getBlog, createBlog, deleteBlog, updateBlog}