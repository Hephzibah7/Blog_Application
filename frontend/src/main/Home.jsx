import React from "react";
import Navbar from "./Navbar";

import Footer from "./Footer";
import Blog from "../components/Blog";
import MyBlog from "../components_own/MyBlog";
import { useState } from "react";
import Form from "../components_own/Form";

const Home=()=>{
    const [isModalOpen, setModalOpen]=useState(false);
    const openModal=()=>setModalOpen(true);
    const closeModal=()=>setModalOpen(false);
    return(
        <>
            <div className="w-screen h-auto  ">
            <Navbar/>
           
            <MyBlog openModal={openModal}/>
            <Form isOpen={isModalOpen} closeModal={closeModal}/>
            <Footer/>
            </div>

        </>
    )
}

export default Home;
