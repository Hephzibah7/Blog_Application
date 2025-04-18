import React from "react";
import LeftBlog from "./LeftBlog";
import RightBlog from "./RightBlog";

const Blog=()=>{
    return(
        <>
            <div className="flex w-screen h-auto gap-8 bg-gray-200">
                <LeftBlog/>
                <RightBlog/>
            </div>
        </>
    )
}

export default Blog;
