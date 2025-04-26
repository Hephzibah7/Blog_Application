import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import dotenv from "dotenv";
import Blog from "../models/blog.js";

dotenv.config();

async function createBlog(req, res) {
    try {
        const { title, category, content } = req.body;
        const createdAt = new Date();
        const updatedAt = new Date();

        const image = req.file ? req.file.filename : null; // optional image
        const view = 0;
        if (!title || !category || !content) return req.status(400).json({ message: "Details are missing" });
        const userId = req.user.userId;
        const user = await User.findById(userId);
        const newBlog = new Blog({ title: title, category: category, content: content, image: image, author: user.name, createdAt, updatedAt, userId: userId, view: view });
        const savedBlog = await newBlog.save();
        return res.status(200).json({ message: "Blog successfully created" });
    }
    catch (error) {
        return res.status(500).json({ message: "Error creating Blog" });
    }
}
async function getUserBlogs(req, res) {
    try {
        const userId = req.user.userId;
        const blogs = await Blog.find({ userId: userId });
        return res.send({ blogs: blogs });
    }
    catch {
        return res.status(500).json({ message: "Error fetching blogs" });
    }
}
async function getAllBlogs(req, res) {
    try {
        const { category, author } = req.query;

        let filter = {};
        if (category) {
            filter.category = category;
        }
        if (author) {
            filter.author = author;
        }
        const blogs = await Blog.find(filter);
        console.log(blogs);
        return res.send({ blogs: blogs });
    }
    catch {
        return res.status(500).json({ message: "Error fetching blogs" });
    }
}
async function deleteBlog(req, res) {
    try {
        const blogId = req.params.id;
        const deletedUser = await Blog.findByIdAndDelete(blogId);
        return res.status(200).json({ message: "Blog deleted successfully" });
    }
    catch (error) {
        return res.status(500).json({ message: "Error deleting blog" });

    }
}
async function updateBlog(req, res) {
    try {
        console.log("hello");

        const blogId = req.params.id;
        const data = req.body;

        const updatedBlog = await Blog.findByIdAndUpdate(blogId, data, {
            new: true,
        });

        return res.status(200).json({
            message: "Blog updated successfully",
            updatedBlog,
        });
    } catch (error) {
        console.error("Error updating blog:", error);
        return res.status(500).json({ error: "Something went wrong" });
    }
}
async function viewBlog(req, res) {
    try {
        const blogId = req.params.id;

        const blog = await Blog.findById(blogId);
        const previousViews = blog.view;
        const currentViews = previousViews + 1;

        blog.view = currentViews;
        const updatedBlog = await blog.save();

        return res.status(200).json({
            message: "Blog view updated successfully",
            updatedBlog,
        });
    } catch (error) {
        console.error("Error updating blog:", error);
        return res.status(500).json({ error: "Something went wrong" });
    }
}
async function topViewBlog(req, res) {
    try {
        const topBlog = await Blog.findOne().sort({ view: -1 }).limit(1);

        if (!topBlog) {
            return res.status(404).json({ message: "No blogs found" });
        }

        return res.status(200).json(topBlog);
    } catch (error) {
        console.error("Error finding top view blog:", error);
        return res.status(500).json({ error: "Something went wrong" });
    }
}
async function topTenViewBlog(req, res) {
    try {
        const topBlogs = await Blog.find().sort({ view: -1 }).limit(10);

        if (!topBlogs || topBlogs.length === 0) {
            return res.status(404).json({ message: "No blogs found" });
        }

        return res.status(200).json(topBlogs);
    } catch (error) {
        console.error("Error finding top view blogs:", error);
        return res.status(500).json({ error: "Something went wrong" });
    }
}
async function getSelectedBlog(req, res) {
    try {
        const blogId = req.params.id;
        const blog = await Blog.findById(blogId);
        res.status(200).send(blog);

    } catch (error) {
        console.error("Error details about blog:", error);
        return res.status(500).json({ error: "Something went wrong" });
    }
}



const blogController = {
    getAllBlogs: getAllBlogs,
    getUserBlogs: getUserBlogs,
    createBlog: createBlog,
    deleteBlog: deleteBlog,
    updateBlog: updateBlog,
    viewBlog: viewBlog,
    topViewBlog: topViewBlog,
    topTenViewBlog: topTenViewBlog,
    getSelectedBlog:getSelectedBlog
}

export default blogController;

