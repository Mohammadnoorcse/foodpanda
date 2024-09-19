import React from 'react'
import img from "../assets/10001.jpg"
import CartCard from '../component/cart/CartCard';

const Cart = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="container p-4 flex flex-col gap-4 mt-4">
        {/* cart item */}
        <CartCard />
        <CartCard />
        {/* cost */}
        <div className="w-full p-4 border rounded flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-base font-bold border-b border-dashed py-3">
              Checkout Summary
            </h1>
            <button className="bg-[#4398fe] text-white py-1 px-3 text-base font-bold rounded hover:bg-[#6097DB]">
              Checkout
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-base font-light">Subtotal</span>
            <span className="text-base font-light">281 TK.</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-base font-light">Shipping</span>
            <span className="text-base font-light">48 TK.</span>
          </div>
          <div className="flex justify-between items-center border-b border-dashed pb-3">
            <span className="text-base font-light">Total</span>
            <span className="text-base font-light">329 TK.</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-base font-medium">Payable Total</span>
            <span className="text-base font-medium">329 TK.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart