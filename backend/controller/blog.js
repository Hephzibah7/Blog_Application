import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import dotenv from "dotenv";
import Blog from "../models/blog.js";

dotenv.config();

async function createBlog(req, res){
    try{
        const {title, category,content}=req.body;
        const createdAt=new Date();
        const updatedAt=new Date();
        
        const image = req.file ? req.file.filename : null; // optional image
        const view=0;
        if(!title || !category ||  !content) req.status(400).json({message:"Details are missing"});
        const userId=req.user.userId;
        const user=User.findOne(userId);
        const newBlog=new Blog({title:title, category:category, content:content, image:image, author:user.name, createdAt, updatedAt, userId:userId, view:view});
        const savedBlog=await newBlog.save();
        res.status(200).json({message:"Blog successfully created"});
    }
    catch(error){
        res.status(500).json({message:"Error creating Blog"});
    }
}
async function getUserBlogs(req, res){
    try{
        const userId=req.user.userId;
        const blogs=Blog.find({userId:userId});
        res.status({blogs:blogs});
    }
    catch{
        res.status(500).json({message:"Error fetching blogs"});
    }
}
async function getAllBlogs(req, res){
    try{
        const blogs=Blog.find({userId:userId});
        res.status({blogs:blogs});
    }
    catch{
        res.status(500).json({message:"Error fetching blogs"});
    }
}

const blogController={
    getAllBlogs:getAllBlogs,
    getUserBlogs:getUserBlogs,
    createBlog:createBlog
}

export default blogController;

