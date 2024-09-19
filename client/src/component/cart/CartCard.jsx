import React from 'react'
import img from "../../assets/10001.jpg";

const CartCard = () => {
  return (
    <>
      <div className="w-full h-[8rem] border rounded flex justify-between items-center p-4">
        <div className="flex gap-4 items-center">
          <div className="w-[10rem] h-full">
            <img src={img} alt="" className="w-full h-full rounded" />
          </div>
          <div className=" flex flex-col gap-1 leading-normal">
            <h2 className="text-base font-semibold tracking-tight">good</h2>
            <span className="text-base font-light tracking-tight">
              1:3 items
            </span>
            <button className="py-1 px-2 bg-[#E21B70] rounded-md text-base font-light text-white hover:scale-[1.03]">
              Delete
            </button>
          </div>
        </div>
        <div className="">
          <span className="text-xl font-semibold text-[#E21B70]">120 tk.</span>
        </div>
      </div>
    </>
  );
}

export default CartCard