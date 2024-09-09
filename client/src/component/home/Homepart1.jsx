import React from 'react'

const Homepart1 = () => {
  return (
    <div className="w-full  flex justify-center bg-[#F7F7F7] ">
      <div className="container flex gap-4 flex-col p-4">
        {/* firt section */}
        <div className="flex gap-2">
          <div className="xl:w-[50%] w-[65%] h-[100%] flex justify-center flex-col gap-4">
            <h1 className="sm:text-4xl sm:font-bold text-base font-medium text-[#333333]">
              It's the food and groceries you love, delivered
            </h1>
            <div className="w-full h-[5rem] bg-white shadow-md rounded-lg mt-3 p-4  gap-3 lg:flex hidden ">
              <div className="w-[80%] h-full border rounded-md flex">
                <div className="w-full flex ">
                  <div className="relative w-[85%]">
                    <input
                      type="text"
                      className="w-full h-full peer outline-none pl-3"
                      placeholder=" "
                    />
                    <span className="absolute left-3 top-1 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm ">
                      Your street and street number
                    </span>
                  </div>
                  <div className="w-[20%] flex gap-2 items-center hover:text-[#E21B70] cursor-pointer">
                    <i class="fa-solid fa-location-crosshairs text-[#E21B70]"></i>
                    <span>Locate&nbsp;me</span>
                  </div>
                </div>
              </div>
              <div className="w-[15%] h-full">
                <button className="w-full h-full bg-[#C21760] rounded-md text-white">
                  Find Food
                </button>
              </div>
            </div>
          </div>
          <div className="xl:w-[50%] w-[35%] h-[100%]">
            <img
              src="https://images.deliveryhero.io/image/foodpanda/homepage/refresh-hero-home-bd.png"
              alt=""
            />
          </div>
        </div>
        {/* section part */}
        <div className="w-full   rounded-lg mt-3 p-4  gap-3 lg:hidden flex flex-col">
          <div className="w-ful sm:h-[4rem] h-[3rem] border rounded-md flex bg-white shadow-md">
            <div className="w-full h-full flex ">
              <div className="relative sm:w-[80%] w-full  h-full">
                <input
                  type="text"
                  className="w-full h-full peer outline-none pl-3"
                  placeholder=" "
                />
                <span className="absolute left-3 top-1 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm ">
                  Your street and street number
                </span>
              </div>
              <div className="w-[20%] sm:flex hidden gap-2 items-center hover:text-[#E21B70] cursor-pointer">
                <i class="fa-solid fa-location-crosshairs text-[#E21B70]"></i>
                <span>Locate&nbsp;me</span>
              </div>
            </div>
          </div>
          <div className="w-full sm:h-[4rem] h-[3rem]">
            <button className="w-full h-full bg-[#C21760] rounded-md text-white">
              Find Food
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepart1