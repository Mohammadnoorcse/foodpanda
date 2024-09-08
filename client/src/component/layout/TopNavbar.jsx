import React from 'react'

const TopNavbar = () => {
  return (
    <div className="w-full h-[5rem] bg-[#e21b70] text-white flex ">
      <div className="sm:w-[98%] w-[95%] h-full flex justify-center items-center gap-4 pl-2">
        <img
          src="https://micro-assets.foodora.com/img/ic-rider-icon.svg"
          alt=""
          className="w-[48px] h-[48px] text-white sm:flex hidden"
        />
        <span className="text-xl sm:font-bold font-normal">
          Do you need a business account?
        </span>
        <button className="border-2 sm:p-2 p-1 rounded-md text-sm sm:font-bold font-normal hover:bg-white hover:text-[#A29EA4]">
          SIGN UP NOW
        </button>
      </div>
      <div className="sm:w-[2%] w-[5%] pl-1 sm:pl-0 flex items-center">
        <span className='cursor-pointer'>x</span>
      </div>
    </div>
  );
}

export default TopNavbar