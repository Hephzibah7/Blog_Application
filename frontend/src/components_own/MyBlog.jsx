import React from "react";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const MyBlog = ({ openModal , getBlogs, blogs}) => {
    const handleAddBlog = () => {
        openModal();
    }
    
    useEffect(() => {
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
                            <Card key={index} title={blog.title} author={blog.author} content={blog.content} date={blog.createdAt} image={blog.image} bloguserId={blog.userId} blogId={blog._id} getBlogs={getBlogs} />
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}

export default MyBlog;