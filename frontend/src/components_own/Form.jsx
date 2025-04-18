import React from "react";

const Form=({isOpen, closeModal})=>{
    const handleSubmit=()=>{
        closeModal();
    }
    if(!isOpen) return null;
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
            type="text"
            placeholder="Blog Title"
            className="w-full border border-gray-300 px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Category"
            className="w-full border border-gray-300 px-3 py-2 rounded"
            required
          />
          <textarea
            placeholder="Blog Content"
            className="w-full border border-gray-300 px-3 py-2 rounded h-32 resize-none"
            required
          ></textarea>
          <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Add Image (optional)
    </label>
    <input
      type="file"
      accept="image/*"
      className="w-full border border-gray-300 px-3 py-2 rounded file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-gray-100 hover:file:bg-gray-200"
    />
  </div>
          <button
            type="submit"
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-green-700"
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