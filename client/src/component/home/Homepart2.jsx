import React from 'react'

const Homepart2 = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="container flex flex-col gap-4 p-4">
        <h2 className="mt-12 mb-8 text-3xl font-bold text-[#333333]">
          You prepare the food, we handle the rest
        </h2>
      </div>
      <div className="w-full h-[22rem]">
        <img
          src="https://images.deliveryhero.io/image/foodpanda/home-vendor-bd.jpg?width=4000&height=2560"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="container flex flex-col gap-4 relative">
        <div className="absolute top-[-8rem] sm:w-[40rem] w-full  bg-white rounded-md shadow-md p-4 flex flex-col gap-4">
          <p className="text-xl font-medium">
            List your restaurant or shop on foodpanda
          </p>
          <p className="text-base font-normal text-justify">
            Would you like millions of new customers to enjoy your amazing food
            and groceries? So would we!
            <br />
            <br /> It's simple: we list your menu and product lists online, help
            you process orders, pick them up, and deliver them to hungry pandas
            – in a heartbeat!
            <br />
            <br /> Interested? Let's start our partnership today!
          </p>
          <div>
            <button className="w-[8rem] h-[2.5rem] bg-[#E21B70] rounded-md text-white font-bold text-sm">
              Get Started
            </button>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Homepart2