import React from "react";
import MainBlog from "./MainBlog";
import AllBlog from "./AllBlog";

const LeftBlog=({ openModal , getBlogs, blogs, handleFormData, setAllBlogs })=>{
    return(
        <>
            <div className="w-3/4 h-auto mt-5 border border-black-300 bg-white ml-20 rounded-2xl">
                <div className="m-2 border border-gray-300 h-auto rounded-2xl">
                    <div className="flex-col gap-10 w-full h-auto">
                        <div>
                            <MainBlog/>
                        </div>
                        <div>
                            <AllBlog openModal={openModal} getBlogs={getBlogs} blogs={blogs} handleFormData={handleFormData} setAllBlogs={setAllBlogs}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftBlog;
