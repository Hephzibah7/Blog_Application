import React from "react";

const Navbar=()=>{
    return(
        <>
           <div className="mt-0  w-screen h-20 bg-black p-5">
                <div className="flex justify-between ">
                    <div >
                        <h1 className="italic font-bold text-3xl text-pink-500">Magazine</h1>
                    </div>
                    <div>
                        <div className="flex gap-10 font-bold text-white text-xl pr-20">
                            <div>
                                <h1>Home</h1>
                            </div>
                            <div>
                                <h1>Blog</h1>
                            </div>
                            <div>
                                <h1>About us</h1>
                            </div>
                            <div>
                                <h1>Pricing</h1>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}

export default Navbar;
