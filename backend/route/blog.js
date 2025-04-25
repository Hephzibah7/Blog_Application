import express from "express"
import blogController from "../controller/blog.js";
import upload from "../middleware/uploads.js";
import verifyToken from "../middleware/auth.js";

const router=express.Router();


router.post("/blogs", verifyToken, upload.single('image'), blogController.createBlog);
router.get("/blogs/user", verifyToken, blogController.getUserBlogs);
router.get("/blogs", verifyToken, blogController.getAllBlogs);
router.delete("/blogs/:id", verifyToken, blogController.deleteBlog);
router.put("/blogs/:id", verifyToken, upload.single('image'), blogController.updateBlog);
router.get("/views/:id", verifyToken, blogController.viewBlog);
router.get("/topblogs", verifyToken, blogController.topViewBlog)
router.get("/toptenblogs", verifyToken, blogController.topTenViewBlog);
router.get("/blogs/:id", verifyToken, blogController.getSelectedBlog);
export default router;