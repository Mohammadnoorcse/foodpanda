import React from 'react'

const FoodCard = () => {
  return (
    <div className="w-full h-[12rem] border rounded-md p-4 flex justify-between gap-4 hover:bg-[#FDF2F7] hover:scale-[1.04]">
      <div className="w-full flex flex-col gap-2">
        <h3 className="w-full text-ellipsis text-nowrap overflow-hidden text-[#333333] text-base font-bold">
          Margherita Pizza
        </h3>
        <p className="text-[##333333] text-base">from Tk 1,050</p>
        <div className="w-full h-[8rem]">
          <p className="w-full h-full">
            Our in-house 12” thin crust pizza base topped with tomato, basil &
            mozzarella
          </p>
        </div>
      </div>
      <div className="w-[150px] h-[150px]">
        <img
          src="https://images.deliveryhero.io/image/fd-bd/Products/281944.jpg?width=150&height=150"
          alt=""
          className="w-full h-full rounded-md"
        />
      </div>
    </div>
  );
}

export default FoodCard