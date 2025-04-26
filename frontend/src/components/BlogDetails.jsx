import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie"
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import api from "../api"

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
   const token = Cookies.get("authToken");
      const config = {
          headers: {
              Authorization: `Bearer ${token}`,
          },
      };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await api.get(`/blogs/${id}`, config);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog details", error);
      }
    };

    fetchBlog();
  }, [id]); // Re-run this effect if the ID changes

  if (!blog) {
    return <div>Loading...</div>;
  }
  const normalizeDate=(value)=>{
    const date = new Date(value);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
   return formattedDate;
}

  return (
   <>
    {blog && <div className="p-10 m-10 h-auto">
               
        <div className="m-5 ml-[350px]">
            <div>
                <div className="bg-pink-500 w-fit pl-7 pr-7 text-white font-bold pt-2 pb-2 rounded-3xl">
                    <h2>{blog.category}</h2>
                </div>
            </div>
            <div className="mt-2  font-bold">
                <div className="text-[100px] font-bold">
                    <h1>{blog.title}</h1>
                </div>
                <div>
                    <div className="text-2xl">Published By</div>
                    <div className="text-pink-600">{blog.author}</div>
                </div>
                <div>
                    <div className="text-2xl">Created At</div>
                    <div className="text-pink-600">{normalizeDate(blog.createdAt)}</div>
                </div>
            </div>
            
         <div className="">
         <div className="mt-5">
                <div className="w-full h-30 relative justify-center align-center">
                    <img className="h-[600px]  object-contain object-center  rounded-3xl" src={`${process.env.REACT_APP_BASE_URL}/uploads/${blog.image}`}></img>
                </div>
            </div>
            <div className="mt-10  text-xl w-[1050px]">
                <h2>
                    {blog.content}                       
                </h2>

            </div>
         </div>
        </div>
    </div>}
    </>
  );
};

export default BlogDetails;
