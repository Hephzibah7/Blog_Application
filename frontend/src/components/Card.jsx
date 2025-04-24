import React from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useUserContext } from "../hooks/UserProvider";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie"
const Card = ({ title, content, author, date, image, bloguserId, blogId, getBlogs }) => {

    const trim = (text, wordLimit = 30) => {
        if (text == null) return null;
        return text.split(" ").slice(0, wordLimit).join(" ") + "...";
    };
    const { userId } = useUserContext();
    const token = Cookies.get("authToken");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const handleDelete = async (blogId) => {
        try {
            const response = await axios.delete(`http://localhost:9002/blogs/${blogId}`, config);
            if (response.status == 200) {
                toast.success("Successfully deleted !", {
                    position: "top-right",
                    autoClose: 2000,
                });
                getBlogs();
            }

        }
        catch (error) {

        }
    }
    return (
        <>
            <div className="w-[370px] h-[480px] flex-col cursor-pointer ">
                <div className="">
                    <img className="object-contain object-center" src={`http://localhost:9002/uploads/${image}`} />
                </div>
                <div className="flex-col  ">
                    <div className="font-bold text-xl mt-3 flex">
                        <h1>{title}</h1>
                        <ArrowOutwardIcon />
                    </div>
                    <div className="mt-2 text-gray-600">
                        <h2>{trim(content)}</h2>
                    </div>
                    <div className="flex mt-3">
                        <div className="font-bold">
                            {author}
                        </div>
                        <div>|</div>
                        <div className="font-bold">
                            {date}
                        </div>
                    </div>
                    {userId == bloguserId ? <div className="flex">
                        <div className="cursor-pointer" onClick={() => handleUpdate(blogId)}><EditIcon /></div>
                        <div className="cursor-pointer" onClick={() => handleDelete(blogId)} ><DeleteIcon /></div>
                    </div> : null}
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default Card;