import React from "react";
import Navbar from "./Navbar";

import Footer from "./Footer";
import Blog from "../components/Blog";
import MyBlog from "../components_own/MyBlog";
import { useState, useEffect } from "react";
import Form from "../components_own/Form";
import axios from "axios"
import Cookies from "js-cookie";


const Home=()=>{
    const [isModalOpen, setModalOpen]=useState(false);
    const openModal=()=>setModalOpen(true);
    const closeModal=()=>setModalOpen(false);
    const [blogs, setBlogs] = useState([]);
     const token = Cookies.get("authToken");
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const [formData, setFormData] = useState({
            title: "",
            category: "",
            content: "",
            image: null,
            blogId:null
          });

          const handleFormData=(data)=>{
           
            setFormData(data);
          }
        
    const getBlogs = async () => {
            try {
              const response = await axios.get('http://localhost:9002/blogs', config);
            
        
              // Assuming response.data.blogs is an array
              const formattedBlogs = response.data.blogs.map((blog) => {
                const date = new Date(blog.createdAt);
                const options = { year: 'numeric', month: 'short', day: 'numeric' };
                const formattedDate = date.toLocaleDateString('en-US', options);
                return {
                  ...blog,
                  createdAt: formattedDate, // Replace with formatted date
                };
              });
        
              setBlogs(formattedBlogs);
            } catch (error) {
              console.error('Error fetching blogs:', error);
            }
          };
    return(
        <>
            <div className="w-screen h-auto">
            <Navbar/>
            <MyBlog openModal={openModal} getBlogs={getBlogs} blogs={blogs} handleFormData={handleFormData} />
            <Form isOpen={isModalOpen} closeModal={closeModal} getBlogs={getBlogs} formUpdateData={formData} />
            <Footer/>
            </div>

        </>
    )
}

export default Home;
