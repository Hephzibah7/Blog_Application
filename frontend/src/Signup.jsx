import React from "react";

const Signup =()=>{



return (
    <>
    <div className="w-screen h-screen bg-pink-100 p-5 overflow-x-hidden overflow-y-hidden">
        <div className="flex  h-full   justify-between">
            <div className="text-4xl font-bold italic"> Magazine</div>
            <div className="w-1/2 p-10 ml-20  flex  text-left">
                <div className="m-10 ml-20 pt-10  w-full h-full ">
                    <h1 className="text-4xl font-bold ">Create Your Account</h1>
                   <div className="">
                   <form id="form" >
                        <div className="mt-10 ">
                        <div className="flex-col  mb-3">
                            <div className="mb-1   ">
                                <label className="text-xl ">Name</label>
                            </div>
                            <div>
                                <input className="rounded-xl p-3 w-3/5 mb-3 "></input>
                            </div>
                        </div>
                        <div className="flex-col   mb-3">
                            <div className="mb-1   ">
                                <label className="text-xl ">Email</label>
                            </div>
                            <div>
                                <input className="rounded-xl p-3 w-3/5 mb-3 "></input>
                            </div>
                        </div>
                        <div className="flex-col mb-3">
                            <div className="mb-1   ">
                                <label className="text-xl ">Password</label>
                            </div>
                            <div>
                                <input className="rounded-xl p-3 w-3/5 mb-7 "></input>
                            </div>
                        </div>
                        <div className="bg-black text-xl text-white p-3 text-center w-3/5 font-bold rounded-xl">
                            <button>Submit</button>
                        </div>
                        <div className="w-3/5 text-lg mt-2 font-bold text-center">
                            Already have an account? Sign In
                        </div>
                       
                        </div>
                    </form>
                   </div>
                </div>
            </div>
            <div className="w-1/2  overflow-hidden relative">
          <img
            src="https://media-www.sqspcdn.com/images/pages/tour/blogs/hero/foreground-desktop-1000w.jpg"
            alt="scrolling"
            className="w-full animate-scroll-img"
          />
        </div>
        </div>
    </div>
    </>
)

}

export default Signup;