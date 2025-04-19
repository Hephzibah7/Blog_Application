import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import cors from "cors";
import userRoutes from "./route/user.js";
import blogRoutes from "./route/blog.js";

const app = express();
app.use(express.json());

app.use(cors({
    credentials:true
  }));

const mongoURI =
  "mongodb+srv://heph:heph@cluster0.mjeeyir.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Replace 'your_mongodb_atlas_connection_string' with your actual MongoDB Atlas connection string
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/auth", userRoutes);
app.use("/", blogRoutes);

// Start the server
const port = 9002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});