import React from "react";
import Card from "./Card";
const AllBlog=()=>{
    return(
        <>
            <div className="p-7 ">
                <div className="text-xl font-bold">
                    <h1>Blog Posts</h1>
                </div>
                <div className="flex gap-3 mt-3">
                    <h1>Filter By</h1>
                    <div className="bg-pink-500 w-fit pl-7 pr-7 text-white font-bold pt-2 pb-2 rounded-3xl">
                            <h2>Author</h2>
                        </div>
                        <div className="bg-pink-500 w-fit pl-7 pr-7 text-white font-bold pt-2 pb-2 rounded-3xl">
                            <h2>Category</h2>
                        </div>
                </div>
                <div className="mt-5 flex w-full gap-3 flex-wrap ">
                <Card/>
                <Card/>
                <Card/>
                </div>
            </div>
        </>
    )
}

export default AllBlog;
