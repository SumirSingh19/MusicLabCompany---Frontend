import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";
import myImage1 from "../assets/icons/noun-my-account-5593607.png";
import myImage2 from "../assets/icons/noun-shopping-bag-1296660.png"

const Header = () => {
    
    const [searchText, setSearchText] = useState("");

    return (
        <div className="flex justify-between items-center m-2 h-20 pl-4 pr-8">
            <div className="m-5 hover:cursor-pointer">
                <div className="h-0.5 w-5 bg-gray-700 mb-1"></div>
                <div className="h-0.5 w-5 bg-gray-700 mb-1 hover:w-1"></div>
            </div>
            <div className="w-20 h-10">
                <img className="" height={29} width={300}src={LOGO_URL}/>
            </div>
            <div className="flex flex-row justify-between">
                <div className="relative mt-1 focus:border-slate-800 focus:ring-slate-800 
                    focus:ring-1 ">
                    <input type="search" onChange={(e) => e.target.value} 
                    className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-slate-300 focus:pl-16" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-slate-300 peer-focus:stroke-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <ul className="flex flex-row justify-between space-x-7 items-center">
                    <li className="w-7 h-auto">
                        <img src={myImage1}/>
                    </li>
                    <li className="w-8 h-auto">
                    <img src={myImage2}/>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Header;