import React from 'react'
import TopNavbar from './TopNavbar'
import {Link} from "react-router-dom"
import logo from "../../assets/panda.png";

const Navbar = () => {
  return (
    <>
      <TopNavbar />
      {/* desktop Navbar */}
      <div className="w-full h-[4rem] border shadow-md sm:flex justify-center items-center hidden">
        <div className="container flex justify-between items-center relative">
          <Link to="/" className="flex gap-2 items-center">
            <div className="w-7 h-7 flex justify-center items-center rounded-md">
              <img src={logo} alt="" />
            </div>
            <span className="text-xl font-medium text-[#E21B70]">
              foodpanda
            </span>
          </Link>
          <div className="flex gap-3 items-center">
            <div className="w-[4rem] h-7 flex items-center justify-center border border-[black] rounded-md hover:scale-[1.1] cursor-pointer hover:bg-[#cacaca]">
              <span className="text-[#39434d] text-sm font-medium">login</span>
            </div>
            <div className="w-[5rem] h-7 flex items-center justify-center bg-[#E21B70] rounded-md hover:scale-[1.1] cursor-pointer ">
              <span className="text-[white] text-sm font-medium">Sign up</span>
            </div>
            <div className="w-[5rem] h-7 flex items-center justify-center gap-1 rounded-md hover:bg-[#F0F2F2] cursor-pointer">
              <i class="fa-solid fa-globe"></i>
              <span>EN</span>
              <i class="fa-solid fa-chevron-down text-[#E21B70]"></i>
            </div>
            <div className="w-8 h-8 hover:bg-[#F0F2F2] flex justify-center items-center rounded-[100%] cursor-pointer">
              <i class="fa-solid fa-cart-shopping text-[#4D5358]"></i>
            </div>
          </div>

          {/* login model */}
          <div>
            
          </div>
        </div>
      </div>
      {/* mobaile Navbar */}
      <div className="w-full h-[4rem] border shadow-md sm:hidden flex justify-center items-center ">
        <div className="container flex justify-between items-center pl-3 pr-3">
          <div>
            <i class="fa-solid fa-user text-[#4D5358]"></i>
          </div>

          <Link to="/" className="flex gap-2 items-center">
            <div className="w-7 h-7 flex justify-center items-center rounded-md">
              <img src={logo} alt="" />
            </div>
            <span className="text-xl font-medium text-[#E21B70]">
              foodpanda
            </span>
          </Link>

          <div className="w-8 h-8 hover:bg-[#F0F2F2] flex justify-center items-center rounded-[100%] cursor-pointer">
            <i class="fa-solid fa-cart-shopping text-[#4D5358]"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar