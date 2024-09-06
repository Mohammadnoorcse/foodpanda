import React from 'react'

const TopNavbar = () => {
  return (
    <div className="w-full h-[5rem] bg-[#e21b70] text-white flex">
      <div className="w-[98%] h-full flex justify-center items-center gap-4">
        <img
          src="https://micro-assets.foodora.com/img/ic-rider-icon.svg"
          alt=""
          className="w-[48px] h-[48px] text-white"
        />
        <span className="text-xl font-bold">
          Do you need a business account?
        </span>
        <button className="border-2 p-2 rounded-md text-sm font-bold hover:bg-white hover:text-[#A29EA4]">
          SIGN UP NOW
        </button>
      </div>
      <div className="w-[2%] flex items-center">
        <span className='cursor-pointer'>x</span>
      </div>
    </div>
  );
}

export default TopNavbar