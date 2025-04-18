import React from "react";

const MainBlog=()=>{
    return(
        <>
            <div className="p-10 mt-10 h-auto">
                <div className="">
                    <div>
                        <div className="bg-pink-500 w-fit pl-7 pr-7 text-white font-bold pt-2 pb-2 rounded-3xl">
                            <h2>Photography</h2>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="text-5xl font-bold">
                            <h1>Untitled Design and Photography Journal</h1>
                        </div>
                    </div>
                    <div className="mt-5 text-gray-600">
                        <h2>
                        It’s not just about capturing moments — it's about telling stories without saying a word. Every click is a chance to frame emotion, light, color, and perspective into a memory that lasts forever.
                        </h2>
                    </div>
                    <div className="mt-5">
                        <div className="w-full h-30 relative">
                            <img className="h-[600px]  object-contain object-center  rounded" src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D"></img>
                           <div className="h-full w-full absolute top-[500px] p-5 text-white">
                                <div className="w-4/5 pr-5 flex justify-between">
                                    <div className="flex gap-5">
                                        <div className="flex-col">
                                            <h1>Written By</h1>
                                            <h2 className="font-bold text-xl">Hephzibah Ranjan</h2>
                                        </div>
                                        <div className="flex-col">
                                            <h1>Published On</h1>
                                            <h2 className="font-bold text-xl">2 September 2025</h2>
                                        </div>
                                    </div>
                                    <div>
                                    <div className="flex mt-7 mr-5 gap-2">
                                            <h1>Views</h1>
                                            <h2 className="font-bold">200</h2>
                                        </div>
                                    </div>
                                </div>
                           </div>
                        </div>  
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainBlog;
