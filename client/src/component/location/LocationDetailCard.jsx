import React from 'react'
import { Link } from "react-router-dom";
import img1 from "../../assets/10006.jpg";
const LocationDetailCard = () => {
  return (
    <Link
      to="/restaurant/1"
      className="w-full h-[18rem] border rounded-md flex flex-col gap-2 hover:scale-[1.02]"
    >
      <div className="w-full h-[80%]">
        <img src={img1} alt="" className="w-full h-full rounded-md" />
      </div>
      <div className="flex flex-col gap-1 p-2">
        <div className="flex justify-between items-center">
          <h1 className="text-base font-medium">Royal Park Residence Hotel</h1>
          <div className="flex gap-1 items-center text-sm">
            <i class="fa-solid fa-star"></i>
            <p className="text-[#707070] font-medium">
              4.9<span className="font-normal">(1000)</span>
            </p>
          </div>
        </div>
        <span className="text-base text-[#707070]">Asian</span>
      </div>
    </Link>
  );
}

export default LocationDetailCard