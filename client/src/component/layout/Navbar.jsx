import React from 'react'
import TopNavbar from './TopNavbar'
import {Link} from "react-router-dom"
import logo from "../../assets/panda-logo.png";

const Navbar = () => {
  return (
    <>
      <TopNavbar />
      <div className="w-full h-[4rem] border shadow-md flex justify-center items-center">
        <div className="container flex justify-between items-center">
          <Link to="/" className="flex gap-2 items-center">
            <div className="w-7 h-7 bg-[#E21B70] flex justify-center items-center rounded-md">
              <img src={logo} alt="" className="text-white" />
            </div>
            <span className="text-xl font-medium text-[#E21B70]">foodpanda</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar