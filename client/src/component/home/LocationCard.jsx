import React from 'react'
import img1 from "../../assets/10009.jpg";
import { Link } from "react-router-dom";
const LocationCard = ({value}) => {
  return (
    <Link to={`city/${value.location}`} className="w-full h-[12rem]  relative">
      <img
        src={value.image}
        alt=""
        className="w-full h-full rounded-md hover:scale-[1.01]"
      />
      <span className="absolute bottom-2 left-2 p-2 bg-white rounded-md">
        {value.location}
      </span>
    </Link>
  );
}

export default LocationCard