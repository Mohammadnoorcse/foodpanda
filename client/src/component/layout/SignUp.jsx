import React, { useState } from "react";
import img1 from "../../assets/login-1.svg";
import img2 from "../../assets/login-2.svg";

const SignUp = ({ LoginBtnArrowhandler, setIsLoginBtn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [continueBtn, setContinueBtn] = useState("");
  return (
    <div className="absolute top-[20rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white rounded-lg box-shadow w-[25rem] h-auto z-[500] flex flex-col gap-4 p-6">
      <div className="flex items-center justify-between">
        <div
          className=" p-2  w-[2.1rem] h-[2.1rem] rounded-[100%] flex justify-center items-center border border-dashed cursor-pointer hover:scale-[1.1] hover:bg-[#F0F2F2]"
          onClick={() => LoginBtnArrowhandler("")}
        >
          <i class="fa-solid fa-arrow-left"></i>
        </div>
        <div
          className=" p-2 shadow-md w-[2.1rem] h-[2.1rem] rounded-[100%] flex justify-center items-center border border-dashed cursor-pointer hover:scale-[1.1]"
          onClick={() => setIsLoginBtn("")}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
      <form action="" className="flex flex-col gap-4">
        <div className={continueBtn ? "hidden" : "flex flex-col gap-3"}>
          <img src={img1} alt="" className="w-20" />
          <h2 className="text-[#333333] text-xl font-bold">
            What's your email?
          </h2>
          <p className="text-[#707070] text-sm font-normal">
            We'll check if you have an account
          </p>
        </div>
        <div className={continueBtn ? "hidden" : "relative"}>
          <input
            type="text"
            className="w-full h-12 border-2 outline-none p-3 rounded-md  peer"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="absolute left-3 top-1 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm ">
            Email
          </span>
        </div>
        <div
          className={
            continueBtn
              ? "hidden"
              : `w-full h-12 rounded-md text-center cursor-pointer flex justify-center items-center ${
                  email ? "bg-[#e21b70]" : "bg-gray-400 cursor-not-allowed"
                }`
          }
          onClick={() => setContinueBtn(true)}
        >
          <span className="text-sm font-bold text-white">Continue</span>
        </div>

        <div className={continueBtn ? "flex flex-col gap-4" : "hidden"}>
          <div className="flex flex-col gap-3">
            <img src={img2} alt="" className="w-20" />
            <h2 className="text-[#333333] text-xl font-bold">Welcome back!</h2>
            <p className="text-[#707070] text-sm font-normal text-justify">
              Log in by typing your password. We can also send a login link to
              your email.
            </p>
            <p className="text-[#707070] text-sm font-bold">{email}</p>
          </div>
          <div className="relative">
            <input
              type="text"
              className="w-full h-12 border-2 outline-none p-3 rounded-md  peer"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="absolute left-3 top-1 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm ">
              Password
            </span>
          </div>
          <button
            className={`w-full h-12 rounded-md text-center cursor-pointer flex justify-center items-center ${
              password ? "bg-[#e21b70]" : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            <span className="text-sm font-bold text-white">
              Log in with password
            </span>
          </button>
          <div className="w-full h-12 border border-[black] rounded-md flex justify-center items-center hover:bg-[#F0F2F2] hover:scale-[1.02] cursor-pointer ">
            <span>Send me a login link</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
