import React from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const Card=({title, content, author, date, image})=>{

    const trim = (text, wordLimit = 30) => {
        if(text==null) return null;
        return text.split(" ").slice(0, wordLimit).join(" ") + "...";
      };
      
    return(
        <>
         <div className="w-[370px] h-[480px] flex-col cursor-pointer ">
                        <div className="">
                            <img className="object-contain object-center" src={`http://localhost:9002/uploads/${image}`}/>
                        </div>
                        <div className="flex-col  ">
                            <div className="font-bold text-xl mt-3 flex">
                                <h1>{title}</h1>
                                <ArrowOutwardIcon/>
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
                            <div className="flex">
                                <div className="cursor-pointer"><EditIcon/></div>
                                <div className="cursor-pointer"><DeleteIcon/></div>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default Card;