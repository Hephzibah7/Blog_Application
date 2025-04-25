import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import Cookies from "js-cookie"
import { useUserContext } from "./hooks/UserProvider";

const Login = ()=>{
    const [userData, setUserData]=useState({
        email:"",
        password:""
    })
    const {setUserGlobalData}=useUserContext();
    
const navigate = useNavigate();
    const handleChange=(e)=>{
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:9002/auth/login', userData);
           if(response.status==200){
            toast.success("Login Successfull !", {
                        position: "top-right",
                        autoClose:2000,
                      });
            Cookies.set('authToken', response.data.token, { 
                expires: 7, 
                sameSite: 'strict'
              });
              Cookies.set('userId', response.data.userId, { 
                expires: 7, 
                sameSite: 'strict'
              });
              Cookies.set('username', response.data.username, { 
                expires: 7, 
                sameSite: 'strict'
              });
              console.log(response.data);
              setUserGlobalData(response.data.userId, response.data.username);
              setUserData({email:"", password:""});
              setTimeout(()=>navigate("/home"), 2000);
              
           }
           else if(response.status==400){
            toast.error("Wrong Password!", {
                position: "top-center",
              });
           }

        }
        catch(error){
            toast.error("Login Failed! Try Again", {
                position: "top-center",
              });
        }
    }
    const handleSignUp=()=>{
        navigate("/");
    }

    return (
        <>
        <div className="w-screen h-screen bg-pink-100 p-5 overflow-x-hidden overflow-y-hidden">
        <div className="flex  h-full   justify-between">
            <div className="text-4xl font-bold italic"> Magazine</div>
            <div className="w-1/2 p-10 ml-20  flex  text-left">
                <div className="m-10 ml-20 pt-10  w-full h-full ">
                    <h1 className="text-4xl font-bold ">Login</h1>
                   <div className="">
                   <form id="form" onSubmit={handleSubmit} >
                        <div className="mt-10 ">
                        <div className="flex-col   mb-3">
                            <div className="mb-1   ">
                                <label className="text-xl ">Email</label>
                            </div>
                            <div>
                                <input className="rounded-xl p-3 w-3/5 mb-3" name="email" value={userData.email} onChange={handleChange}></input>
                            </div>
                        </div>
                        <div className="flex-col mb-3">
                            <div className="mb-1   ">
                                <label className="text-xl">Password</label>
                            </div>
                            <div>
                                <input className="rounded-xl p-3 w-3/5 mb-7" name="password" type="password" value={userData.password} onChange={handleChange}></input>
                            </div>
                        </div>
                        <div className="bg-black text-xl text-white p-3 text-center w-3/5 font-bold rounded-xl cursor-pointer">
                            <button>Submit</button>
                        </div>
                        <div className="w-3/5 text-lg mt-2 font-bold text-center">
                           Don't have an account? <span className="text-pink-600 cursor-pointer" onClick={()=>{handleSignUp()}}>SignUp</span>
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
        <ToastContainer/>
    </div>
        </>
    )
}

export default Login;


