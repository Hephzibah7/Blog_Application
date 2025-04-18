import React from "react";

const Card=()=>{
    return(
        <>
         <div className="w-[370px] h-[480px] flex-col cursor-pointer ">
                        <div className="">
                            <img className="object-contain object-center" src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2022%2F03%2Ffashion-nova-jordyn-woods-office-babe-collection-0.jpg?w=960&cbr=1&q=90&fit=max"/>
                        </div>
                        <div className="flex-col  ">
                            <div className="font-bold text-xl mt-3">
                                <h1>Interview with Photographer & UX Designer, Hephzibah Ranjan</h1>
                            </div>
                            <div className="mt-2 text-gray-600">
                            <h2>
                        It’s not just about capturing moments — it's about telling stories without saying a word. Every click is a chance to frame emotion, light, color, and perspective into a memory that lasts forever.
                        </h2>
                            </div>
                            <div className="flex mt-3">
                                <div className="font-bold">
                                    Hephzibah Ranjan
                                </div>
                                <div>|</div>
                                <div className="font-bold">
                                    28 August 2025
                                </div>
                            </div>
                            <div className="italic cursor-pointer">Read more</div>
                        </div>
                    </div>
        </>
    )
}

export default Card;