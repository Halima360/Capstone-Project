import React, { useState } from "react";
import navicon from "../img/navicon.png";
import search from "../img/search.png";
import help from "../img/help.png";
import {FaTimes, FaBars} from "react-icons/fa"
import { Link
 } from "react-router-dom";
export function Nav(){
    const [navBar, setNavBar] = useState(false)
    return(
        <div className=" flex flex-row  flex-wrap items-center justify-start space-x-2  md:px-10  py-5 h-32 md:h-20 bg-white z-9999
        fixed top-0 left-0 right-0 shadow-sm md:flex md:flex-row  md:items-center md:justify-between">
       <img className="w-20 md:w-32 " src={navicon}/>
       <div className=" relative w-10%   py-2  h-9 md:h-11 md:w-80 flex flex-row space-x-5 md:space-x-2  
       items-center  justify-center 
        border-gray-300 rounded border-2">
        <img src={search} className="absolute left-2 "/>
        <input placeholder="Search for anything" className="outline-none placeholder:text-sm pl-2 h-3 md:h-4  md:pl-0"/>
        
       </div>
       <div className=" hidden md:flex md:flex-row md:items-center md:justify-center md:space-x-5">
        <p>Home</p>
        
           <div className="flex flex-row space-x-0"> 
           <img src={help}/>
            <p>Help</p> 
            </div>
            <Link to="/signup" className="bg-orange mt-2 md:py-3 px-2 rounded">Get started</Link>
        </div>
        <div onClick={()=> setNavBar(!navBar)}   className="cursor-pointer pr-4 z-20 text-gray-700 md:hidden">
             
        {navBar ? <FaTimes className="z-30" size={20} /> : <FaBars size={35} />}
        </div>
        {navBar && (
            <>
           <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full
             h-screen bg-gradient-to-b from-black to-gray-700 text-gray-500 ease-in-out-500 z-10">
                <li><Link to="/home">Home</Link> </li>
                <li> <Link to="#">Help</Link></li>
                <li> <Link to="/signup" >Get started</Link></li>
            </ul>
            </>
        )}
       </div>

    
    )
}