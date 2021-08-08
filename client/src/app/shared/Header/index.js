import React from 'react';
import { Link, useHistory } from "react-router-dom";


function Header() {
    return (
       <header>
           <nav className=" flex items-center justify-between  py-2 px-4  bg-gray-300 h-12">
               <div className="flex items-center justify-start w-1/6 gap-4">
                 <Link
                  to="/login"
                  className=" p-4 align-baseline font-bold capitalize text-sm text-primary hover:text-primary-shade">
                   Logo
                 </Link>
                
               </div>

               <div className="flex items-center justify-center w-4/6 gap-12 ">
                 <Link to="" className="text-black font-serif hover:bg-gray-400 rounded-full w-20 pl-3  ">
                     ongles
                 </Link>
                 <Link to="" className="text-black font-serif hover:bg-gray-400 rounded-full w-20 pl-3">
                     yeux
                 </Link>
                 <Link to="" className="text-black font-serif hover:bg-gray-400 rounded-full w-20 pl-3">
                     lèvres
                 </Link>
                 <Link to="" className="text-black font-serif hover:bg-gray-400 rounded-full w-20 pl-3">
                     teint
                 </Link>
                 <Link to="" className="text-black  font-serif hover:bg-gray-400 rounded-full w-20 pl-3">
                     soins
                 </Link>
                 <Link to="" className="text-black  font-serif hover:bg-gray-400 rounded-full w-20 pl-3">
                     accessoire
                 </Link>

               </div>

               <div className="flex items-center justify-end w-1/6 gap-7 mr-8 ">
                 <Link to="" className="text-xl hover:bg-gray-400 rounded-full w-8 pl-1">
                 <i class="fas fa-heart text-black"></i>
                 </Link>
                 <Link to="" className="text-xl hover:bg-gray-400 rounded-full w-8 pl-2">
                 <i class="fas fa-user"></i>
                 </Link>
               </div>
           </nav>
       </header>
    )
}

export default Header
