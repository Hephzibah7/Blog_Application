import React, { useState } from "react";

const Navbar = ({ handleState }) => {
    const [selected, setSelected] = useState("Home"); // default selected item

    const handleSelect = (item) => {
        setSelected(item);
       handleState(item);
    };

    return (
        <div className="mt-0 w-screen h-20 bg-black p-5">
            <div className="flex justify-between">
                <div>
                    <h1 className="italic font-bold text-3xl text-pink-500">Magazine</h1>
                </div>
                <div className="flex gap-10 font-bold text-white text-xl pr-20 cursor-pointer">
                    {["Home", "Blog", "About us", "Pricing"].map((item) => (
                        <div key={item} onClick={() => handleSelect(item)}>
                            <h1
                                className={`${
                                    selected === item ? "text-pink-400 underline" : ""
                                }`}
                            >
                                {item}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
