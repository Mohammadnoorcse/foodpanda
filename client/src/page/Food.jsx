import React from 'react'
import { Link } from 'react-router-dom'
import FoodCard from '../component/food/FoodCard';

const Food = () => {
  // aminur
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="container p-4 flex flex-col gap-4 mt-4">
          {/* header */}
          <div className="flex gap-2 items-center">
            <Link to="/" className="text-sm text-[#39434d]">
              Home
            </Link>
            <i class="fa-solid fa-angle-right text-sm text[#39434d]"></i>
            <Link to="/" className="text-sm text-[#39434d]">
              Dhaka
            </Link>
            <i class="fa-solid fa-angle-right text-sm text[#39434d]"></i>
            <Link to="/" className="text-sm text-[#39434d]">
              Butlers Chocolate Cafe
            </Link>
          </div>
          {/* second section */}
          <div className="flex gap-8 ">
            <div className="">
              <img
                src="https://images.deliveryhero.io/image/fd-bd/bd-logos/ck9dg-logo.jpg"
                alt=""
                className="w-[8rem] h-[8rem] rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <p className="flex gap-1 items-center text-base font-normal text-[#707070]">
                  Italian
                  <span className="font-bold">.</span>
                </p>
                <p className="flex gap-1 items-center text-base font-normal text-[#707070]">
                  Pizza
                  <span className="font-bold">.</span>
                </p>
                <p className="flex gap-1 items-center text-base font-normal text-[#707070]">
                  Cakes
                  <span className="font-bold">.</span>
                </p>
                <p className="flex gap-1 items-center text-base font-normal text-[#707070]">
                  Dessert
                  <span className="font-bold">.</span>
                </p>
              </div>
              <h1 className="text-3xl font-bold text-[#39434D]">
                Butlers Chocolate Cafe
              </h1>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <i class="fa-solid fa-person-biking"></i>
                  <span className="text-sm font-bold text-[#E21B70]">
                    Free delivery
                  </span>
                  <span className="text-sm text-[#39434D]">
                    <strike>TK.99</strike>
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <i class="fa-solid fa-cart-shopping text-sm text-[#39434D]"></i>
                  <span className="text-sm text-[#39434D] font-medium">
                    Min. order Tk 50
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <i class="fa-solid fa-star text-sm text-[#f57224]"></i>
                  <span className="text-sm font-medium">
                    4.8/5<span className="font-normal">(200)</span>
                  </span>
                  <span className="text-[#39434D] font-medium cursor-pointer p-1  hover:bg-[#F0F2F2]">
                    See reviews
                  </span>
                </div>
                <div className="flex items-center gap-2 text-base font-medium p-1 hover:bg-[#F0F2F2] cursor-pointer">
                  More info
                </div>
              </div>
            </div>
          </div>
          <div className="border"></div>
          {/* third section */}
          <h4 className="mt-6 text-2xl font-medium text-[#333333]">
            Available deals
          </h4>
          <div className="border border-gray-300 rounded-lg p-4 shadow-sm w-80 hover:bg-[#FAD9E7] hover:scale-[1.02] cursor-pointer">
            <div className="flex items-center space-x-2">
              <span className="text-pink-600 text-lg font-bold">💰</span>
              <h3 className="text-pink-600 text-lg font-semibold">
                20% off (EBLDEAL20)
              </h3>
            </div>
            <p className="text-gray-600 mt-2">
              Min. order Tk 599. Valid for all items.
            </p>
            <p className="text-gray-500 mt-1">Use in cart.</p>
          </div>
          {/* four section */}
          <div className="w-full flex gap-4 items-center">
            <div className="sm:w-[30rem] w-[20%]">
              <input
                type="text"
                placeholder="Search in menu"
                className="w-full h-[2.2rem] rounded-[1rem] p-2 bg-[#F7F7F7] text-sm font-medium outline-[#6FB4D2]"
              />
            </div>
            <div
              className="flex gap-8 p-1 overflow-auto "
              style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
            >
              <span className="text-sm">Popular</span>
              <span className="text-sm">Drinks</span>
              <span className="text-sm">Beef&nbsp;Hot&nbsp;Dog</span>
              <span className="text-sm">chicken&nbsp;Momo&nbsp;Combo</span>
              <span className="text-sm">Chicken&nbsp;Hot&nbsp;Dog</span>

              <span className="text-sm">Popular</span>
              <span className="text-sm">Drinks</span>
              <span className="text-sm">Beef&nbsp;Hot&nbsp;Dog</span>
              <span className="text-sm">chicken&nbsp;Momo&nbsp;Combo</span>
              <span className="text-sm">Chicken&nbsp;Hot&nbsp;Dog</span>

              <span className="text-sm">Popular</span>
              <span className="text-sm">Drinks</span>
              <span className="text-sm">Beef&nbsp;Hot&nbsp;Dog</span>
              <span className="text-sm">chicken&nbsp;Momo&nbsp;Combo</span>
              <span className="text-sm">Chicken&nbsp;Hot&nbsp;Dog</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="container flex gap-8 p-4">
          {/* left */}
          <div className=" w-full flex flex-col gap-4">
            <h2 className="text-[#333333] text-2xl font-bold">Popular</h2>
            <p className="text-[#707070] text-base font-normal">
              Most ordered right now.
            </p>
            <div
              className="grid gap-4"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(25rem, 1fr))",
              }}>
              
              <FoodCard/>
              <FoodCard/>
              <FoodCard/>
              <FoodCard/>
              <FoodCard/>
              <FoodCard/>

            </div>
          </div>
          {/* right */}
          {/* <div className="lg:w-[30%] hidden  border"></div> */}
        </div>
      </div>
    </>
  );
}

export default Food