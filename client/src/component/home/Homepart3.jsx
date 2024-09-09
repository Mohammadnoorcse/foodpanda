import React from 'react'
import { homedata } from './homedata';
import LocationCard from './LocationCard';
const Homepart3 = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
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
        <div className="flex gap-4 w-full h-[20rem] bg-[#E11B70] rounded-md p-4">
          <div className="flex flex-col gap-4 justify-center">
            <h3 className='text-2xl font-medium text-white'>Download the food and groceries you love</h3>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Homepart3