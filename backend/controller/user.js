import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import dotenv from "dotenv";

dotenv.config();

async function signup(req, res){
    try{
        const {name, email, password}=req.body;
        const createdAt=new Date();
        if(!name || !email || !password) res.status(400).json({message:"Name, Email and Password are required"});

        const existingUser=await User.findOne({email});
        if(existingUser) res.status(409).json({message:"Email already exists"});

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser=new User({name, email, password:hashedPassword, createdAt});
        const savedUser = await newUser.save();

        res.status(201).json({message:"User registered Successfully"});

    }
    catch(error){
        res.status(500).json({message:"Error in registering the user"});
    }
}

async function login(req, res) {
    try {
      const { email, password } = req.body;
  
      if (!email || !password)
        return res.status(400).json({ message: "Email and password are required" });
  
      const existingUser = await User.findOne({ email:email });
      if (!existingUser)
        return res.status(404).json({ message: "User not found" });
  
      const isPasswordValid = await bcrypt.compare(password, existingUser.password);
      if (!isPasswordValid)
        return res.status(401).json({ message: "Invalid credentials" });
  
      const secretKey = process.env.SECRET_KEY;
      
      const token = jwt.sign({ userId: existingUser._id, username: existingUser.name }, secretKey, {
        expiresIn: "1h",
      });
  
      res.status(200).json({ userId: existingUser._id, token, message: "Login successful" });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).send("Error logging in. Please try again later.");
    }
  }

const userController={
    signup:signup,
    login:login
}

export default userController;