import React from 'react'
import { homedata } from './homedata';
import LocationCard from './LocationCard';
import scanner from "../../assets/10008.png";
import img1 from "../../assets/10002.svg";
import img2 from "../../assets/10003.svg";
import img3 from "../../assets/10004.svg";
const Homepart3 = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <div className="container flex flex-col gap-8  mt-[15rem] mb-[2rem] p-4">
        <h2 className="text-3xl font-bold">
          Find us in these cities and many more!
        </h2>
        <div
          className="w-full h-full grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(16rem, 1fr))",
          }}
        >
          {homedata.map((value) => (
            <LocationCard value={value} key={value._id} />
          ))}
        </div>

        {/* section 2 */}
        <h2 className="text-3xl font-bold mt-8">Put us in your pocket</h2>

        <div className="flex lg:flex-row flex-col gap-4 w-full lg:h-[20rem] sm:h-[30rem] h-[40rem] bg-[#E11B70] rounded-md p-6 relative">
          <div className="flex flex-col gap-4 justify-center">
            <h3 className="text-2xl font-medium text-white">
              Download the food and groceries you love
            </h3>
            <div className="flex gap-4 items-center">
              <div className="w-[6rem] h-[6rem] border border-white rounded-md flex justify-center items-center">
                <img src={scanner} alt="" className="w-[5rem] h-[5rem]" />
              </div>
              <p className="w-[20rem] text-justify text-white">
                It's all at your fingertips – the restaurants and shops you
                love. Find the right food and groceries to suit your mood, and
                make the first bite last. Go ahead, download us.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" className="sm:flex hidden" />
            </div>
          </div>
          <div className="absolute lg:right-0 xl:top-[-10rem] lg:top-[-5rem] top-1/2 ">
            <img
              src="https://images.deliveryhero.io/image/foodpanda/home-foodpanda-apps.png?width=4000&height=3180"
              alt=""
              className="xl:w-[50rem] w-[30rem]"
            />
          </div>
        </div>
        <h2 className="text-3xl font-bold lg:mt-8 sm:mt-[5rem] mt-8">
          Take your office out to lunch
        </h2>
      </div>
      {/* section-3 */}
      <div className="w-full h-[25rem] relative flex justify-center items-center flex-col">
        <img
          src="https://images.deliveryhero.io/image/foodpanda/home-corporate-bd.jpg?width=4000&height=2560"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="container relative flex flex-col gap-4 p-4">
        <div className="absolute top-[-8rem] sm:w-[40rem] w-full bg-white rounded-md shadow-md p-4 flex flex-col gap-4">
          <p className="text-xl font-medium">
            List your restaurant or shop on foodpanda
          </p>
          <p className="text-base font-normal text-justify">
            Order lunch or fuel for work-from-home, late nights in the office,
            corporate events, client meetings, and much more.
          </p>
          <div>
            <button className="w-[8rem] h-[2.5rem] bg-[#E21B70] rounded-md text-white font-bold text-sm">
              Get Started
            </button>
          </div>
        </div>
        <h4 className="text-base font-bold mt-[8rem] text-[#333333]">
          Order food from the best restaurants and shops with foodpanda
          Bangladesh
        </h4>
        <p className="text-justify text-[#6B7680]">
          Are you hungry? Did you have a long and stressful day? Interested in
          getting a cheesy pizza delivered to your office or looking to avoid
          the weekly shop? Then foodpanda Bangladesh is the right destination
          for you! foodpanda offers you a long and detailed list of the best
          restaurants and shops near you to help make your everyday easier. Our
          online food delivery service has it all, whether you fancy a juicy
          burger from Takeout, fresh sushi from Samdado or peri peri chicken
          from Nando's, foodpanda Bangladesh has over 2000 restaurants available
          from Dhaka to Chittagong through to Sylhet. Did you know you can order
          your groceries and more from foodpanda, too? Check out foodpanda shops
          for favourite partners like Unimart, Suborno, Shwapno, Bengal Meat,
          and much more. Sit back and relax – let foodpanda Bangladesh take the
          pressure off your shoulders.
        </p>
        <div className='border mt-8 '></div>
      </div>
    </div>
  );
}

export default Homepart3