import React from "react";
import Card from "./Card";
import axios from "axios"
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const AllBlog = ({ openModal, getBlogs, blogs, handleFormData, setAllBlogs }) => {

    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const token = Cookies.get("authToken");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };


    useEffect(() => {
        getBlogs("","");
    }, []);



    const handleFilter = async() => {
        try{
            getBlogs(author, category);
        }
        catch(error){

        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "category") {
            setCategory(value);
        } else if (name === "author") {
            setAuthor(value);
        }
    };



    return (
        <>
            <div className="p-7 ">
                <div className="text-xl font-bold">
                    <h1>Blog Posts</h1>
                </div>
                <div className="flex mt-3">
                    <div className="w-fit pl-7 pr-7 font-bold pt-2 pb-2 rounded-3xl flex">
                        <label className="mr-1">Author</label>
                        <input className="border border-black  rounded-xl p-1" type="text" value={author} name="author" onChange={handleChange}></input>
                    </div>
                    <div className=" w-fit pl-7 pr-7 font-bold pt-2 pb-2 rounded-3xl flex">
                        <label className="mr-1">Category</label>
                        <input className="border border-black rounded-xl p-1" type="text" value={category} name="category" onChange={handleChange}></input>
                    </div>
                    <button className="bg-pink-500 text-white p-1 pl-5 pr-5 font-bold rounded-xl cursor-pointer" onClick={() => { handleFilter() }}>Filter</button>
                </div>
                <div className="mt-5 flex w-full gap-3 flex-wrap ">
                    {blogs != null && blogs.map((blog, index) => (
                        <Card key={index} title={blog.title} author={blog.author} content={blog.content} date={blog.createdAt} image={blog.image} bloguserId={blog.userId} blogId={blog._id} getBlogs={getBlogs} category={blog.category} handleFormData={handleFormData} openModal={openModal} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default AllBlog;
