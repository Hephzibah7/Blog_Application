import express from "express"
import blogController from "../controller/blog.js";
import upload from "../middleware/uploads.js";
import verifyToken from "../middleware/auth.js";

const router=express.Router();


router.post("/blogs", verifyToken, upload.single('image'), blogController.createBlog);
router.get("/blogs", verifyToken, blogController.getUserBlogs);

export default router;