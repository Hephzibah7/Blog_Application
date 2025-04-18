import React from "react";
import Card from "../components/Card";

const MyBlog=({openModal})=>{
    const handleAddBlog=()=>{
       openModal();
    }
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
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyBlog;