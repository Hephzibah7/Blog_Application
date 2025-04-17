import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const blogSchema=mongoose.Schema({
    title: {type:String, required:true},
    category: {type:String, required:true},
    author: {type:String, required:true},
    content: {type:String, required:true},
    image: {type:String},
    userId: {type:ObjectId},
    createdAt: {type:Date},
    updatedAt: {type:Date}
})

const Blog=mongoose.Model('Blog', blogSchema);

export default Blog;