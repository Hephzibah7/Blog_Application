import React from "react";
import LeftBlog from "./LeftBlog";
import RightBlog from "./RightBlog";

const Blog=({ openModal , getBlogs, blogs, handleFormData, setAllBlogs })=>{
    return(
        <>
            <div className="flex w-screen h-auto gap-8 bg-gray-200">
                <LeftBlog openModal={openModal} getBlogs={getBlogs} blogs={blogs} handleFormData={handleFormData} setAllBlogs={setAllBlogs}/>
                <RightBlog/>
            </div>
        </>
    )
}

export default Blog;
