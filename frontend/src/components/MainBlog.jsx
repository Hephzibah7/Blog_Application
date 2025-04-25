import React from "react";
import axios from "axios"
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useNavigate } from "react-router-dom";

const MainBlog = () => {
    const token = Cookies.get("authToken");
       const navigate = useNavigate();
    const [topBlog, setTopBlog] = useState(null);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    useEffect(() => {
        const getTopBlog = async () => {
            try {
                const response = await axios.get('http://localhost:9002/topblogs', config);
                setTopBlog(response.data);
            }
            catch (error) {

            }

        }
        getTopBlog();
    }, [])

    const trim = (text, wordLimit = 30) => {
        if (text == null) return null;
        return text.split(" ").slice(0, wordLimit).join(" ") + "...";
    };

    const normalizeDate=(value)=>{
        const date = new Date(value);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
       return formattedDate;
    }

    const handleView = async (blogId) => {
        try {
            const response = await axios.get(`http://localhost:9002/views/${blogId}`, config);
            navigate(`/blog/${blogId}`);
        }
        catch (error) {

        }
    }

    return (
        <>
            {topBlog && <div className="p-10 mt-10 h-auto">
               
                <div className="">
                    <div>
                        <div className="bg-pink-500 w-fit pl-7 pr-7 text-white font-bold pt-2 pb-2 rounded-3xl">
                            <h2>{topBlog.category}</h2>
                        </div>
                    </div>
                    <div className="mt-2 flex justify-between font-bold">
                        <div className="text-5xl font-bold">
                            <h1>{topBlog.title}</h1>
                        </div>
                        <div className="text-xl italic mb-2"><span><EmojiEventsIcon className="text-yellow-500"/></span>Trending</div>
                    </div>
                    <div className="mt-5 text-gray-600">
                        <h2>
                            {trim(topBlog.content)}                       
                        </h2>
                        <div className="italic cursor-pointer underline" onClick={() => handleView(topBlog._id)}>Read More</div>

                    </div>
                    <div className="mt-5">
                        <div className="w-full h-30 relative">
                            <img className="h-[600px]  object-contain object-center  rounded" src={`http://localhost:9002/uploads/${topBlog.image}`}></img>
                            <div className="absolute top-[500px] p-5 w-full text-white">
                                <div className="w-4/5 pr-5 flex justify-between">
                                    <div className="flex gap-5">
                                        <div className="flex-col">
                                            <h1>Written By</h1>
                                            <h2 className="font-bold text-xl">{topBlog.author}</h2>
                                        </div>
                                        <div className="flex-col">
                                            <h1>Published On</h1>
                                            <h2 className="font-bold text-xl">{normalizeDate(topBlog.createdAt)}</h2>
                                        </div>
                                        <div className="flex-col">
                                            <h1>Views</h1>
                                            <h2 className="font-bold text-xl">{topBlog.view}</h2>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default MainBlog;
