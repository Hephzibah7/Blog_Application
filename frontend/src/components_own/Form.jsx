import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import api from "../api";
const Form = ({ isOpen, closeModal, getBlogs, formUpdateData }) => {

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
    image: "",
    blogId: null
  });
  const token = Cookies.get("authToken");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const handleFormInputs=()=>{
      console.log(formUpdateData);
      if (formUpdateData) {
        setFormData({
          title: formUpdateData.title || "",
          category: formUpdateData.category || "",
          content: formUpdateData.content || "",
          image: null, 
          blogId: formUpdateData.blogId || "",
        });
      }
    }
    handleFormInputs();
  }, [formUpdateData]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    closeModal();
    
    // Create a FormData object and append all fields
    
    const data = new FormData();
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("content", formData.content);
    console.log(formData);

    if (formData.image) {
      data.append("image", formData.image); 
    }
    if(formData.blogId===""){
      console.log("yes u r creating a new one");
    const response = await api.post("/blogs", data, config);
  }
  else{
    
    const response = await api.put(`/blogs/${formData.blogId}`, data, config);
    console.log(response);
  }
    getBlogs();
    
    setFormData({title:"", category:"", content:"", image:null});
  }
  // Handles all text inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handles file input separately
  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
          >
            &times;
          </button>
          <h2 className="text-xl font-semibold mb-4">Create a New Blog</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              value={formData.title}
              type="text"
              placeholder="Blog Title"
              className="w-full border border-gray-300 px-3 py-2 rounded"
              name="title"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Category"
              className="w-full border border-gray-300 px-3 py-2 rounded"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="Blog Content (min 100 words)"
              className="w-full border border-gray-300 px-3 py-2 rounded h-32 resize-none"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
            ></textarea>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Add Image (optional)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border border-gray-300 px-3 py-2 rounded file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-gray-100 hover:file:bg-gray-200"
              />
            </div>
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-black"
            >
              Post Blog
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form;