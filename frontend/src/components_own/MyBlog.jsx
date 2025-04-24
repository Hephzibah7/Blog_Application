import React from "react";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const MyBlog = ({ openModal }) => {
    const handleAddBlog = () => {
        openModal();
    }
    const [blogs, setBlogs] = useState([]);
    const token = Cookies.get("authToken");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    useEffect(() => {
        const getBlogs = async () => {
          try {
            const response = await axios.get('http://localhost:9002/blogs', config);
            console.log(response.data);
      
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
      
        getBlogs();
      }, []);
      
    return (
        <>
            <div className="w-screen h-auto bg-gray-300 p-[100px]">
                <div className="h-auto border bg-white border-gray-700 p-10">
                    <div className="font-bold text-4xl">
                        My Blog Posts
                    </div>
                    <div className="flex gap-12 flex-wrap mt-10">
                        <div className="w-[370px] h-[480px] flex-col border border-black">
                            <div className="w-full cursor-pointer h-full mt-[150px]  text-center justify-center items-center" onClick={handleAddBlog}>
                                <div className="font-bold text-7xl">+</div>
                            </div>
                        </div>
                        {blogs.map((blog, index) => (
                            <Card key={index} title={blog.title} author={blog.author} content={blog.content} date={blog.createdAt} image={blog.image} />
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}

export default MyBlog;