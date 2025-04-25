import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const RightBlog = () => {
  const [topTenBlogs, setTopTenBlogs] = useState([]);

  const token = Cookies.get("authToken");
         const navigate = useNavigate();
  
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const getTopBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:9002/toptenblogs", config); // make sure endpoint returns top 10 blogs
        console.log("top 10 blogs");
        console.log(response.data);
        setTopTenBlogs(response.data);
      } catch (error) {
        console.error("Failed to fetch top blogs:", error);
      }
    };
    getTopBlogs();
  }, []);

  const handleView = async (blogId) => {
        navigate(`/blog/${blogId}`);

}
const trim = (text, wordLimit = 10) => {
  if (text == null) return null;
  return text.split(" ").slice(0, wordLimit).join(" ") + "...";
};
  return (
    <>
      <div className="w-[600px] h-auto mt-5 bg-white mr-20 rounded-2xl">
        <div className="border h-full border-black-700 m-2 rounded-2xl p-2">
          <div className="mt-5 mb-5 text-2xl font-bold">Featured Blogs</div>
          <div className="flex-col cursor-pointer">
            {Array.isArray(topTenBlogs) && topTenBlogs.map((blog, index) => (
              <div key={index} className="flex w-full h-[200px] mb-5" onClick={() => handleView(blog._id)} >
                <div className="h-full w-1/2">
                  <img
                    className="object-cover h-full w-full rounded-l-xl "
                    src={`http://localhost:9002/uploads/${blog.image}`}
                    alt={blog.title}
                  />
                </div>
                <div className="p-5 w-1/2">
                  <div className="flex text-sm font-bold">
                    <div>{blog.author || "Unknown Author"}</div>
                    <div>|</div>
                    <div>{new Date(blog.createdAt).toLocaleDateString()}</div>
                  </div>
                  <div className="font-bold mt-1 text-xl">
                    <h1>{blog.title}</h1>
                  </div>
                  <div className="font-bold mt-1 text-gray-500">
                    <h1>{trim(blog.content)}</h1>
                  </div>
                  <div className="bg-pink-500 mt-2 w-fit text-sm pl-3 pr-3 text-white font-bold pt-2 pb-2 rounded-3xl">
                    <h2>{blog.category}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RightBlog;
