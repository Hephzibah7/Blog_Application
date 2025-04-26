import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./route/user.js";
import blogRoutes from "./route/blog.js";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
app.use(express.json());

const FRONTEND_URL = process.env.FRONTEND_URL || 'https://magazineblog-684dfx8qc-hephzibah.vercel.app';


app.use(cors({
  origin: FRONTEND_URL,
  credentials: true,               // if you need cookies/auth
  methods: ['GET','POST','PUT','DELETE']
}));

const mongoURI =
  "mongodb+srv://heph:heph@cluster0.mjeeyir.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Replace 'your_mongodb_atlas_connection_string' with your actual MongoDB Atlas connection string
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/auth", userRoutes);
app.use("/", blogRoutes);
console.log(express.static(path.join(__dirname, 'uploads')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/uploads', express.static('uploads'));


// Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});