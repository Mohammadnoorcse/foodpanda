import React, { useState } from 'react'
import TopNavbar from './TopNavbar'
import {Link} from "react-router-dom"
import logo from "../../assets/panda.png";
import img1 from "../../assets/login-1.svg";
import Login from './Login';
import SignUp from './SignUp';

const Navbar = () => {
  const[islogin,setLogin] = useState(false);
  const[isLoginBtn,setIsLoginBtn] = useState("");

  const LoginBtnhandler = (item)=>{
        setLogin(false);
        setIsLoginBtn(item);
  }
  const LoginBtnArrowhandler = (item)=>{
        setLogin(true);
        setIsLoginBtn(item);
  }
  return (
    <>
      <TopNavbar />
      {/* desktop Navbar */}
      <div className="w-full h-[4rem] border shadow-md sm:flex justify-center items-center hidden">
        <div className="container flex justify-between items-center relative">
          <Link to="/" className="flex gap-2 items-center">
            <div className="w-7 h-7 flex justify-center items-center rounded-md">
              <img src={logo} alt="" />
            </div>
            <span className="text-xl font-medium text-[#E21B70]">
              foodpanda
            </span>
          </Link>
          <div className="flex gap-3 items-center">
            <div
              className="w-[4rem] h-7 flex items-center justify-center border border-[black] rounded-md hover:scale-[1.1] cursor-pointer hover:bg-[#cacaca]"
              onClick={() => setLogin(true)}
            >
              <span className="text-[#39434d] text-sm font-medium">login</span>
            </div>
            <div
              className="w-[5rem] h-7 flex items-center justify-center bg-[#E21B70] rounded-md hover:scale-[1.1] cursor-pointer "
              onClick={() => setLogin(true)}
            >
              <span className="text-[white] text-sm font-medium">Sign up</span>
            </div>
            <div className="w-[5rem] h-7 flex items-center justify-center gap-1 rounded-md hover:bg-[#F0F2F2] cursor-pointer">
              <i class="fa-solid fa-globe"></i>
              <span>EN</span>
              <i class="fa-solid fa-chevron-down text-[#E21B70]"></i>
            </div>
            <Link to="/cart" className="w-8 h-8 hover:bg-[#F0F2F2] flex justify-center items-center rounded-[100%] cursor-pointer">
              <i class="fa-solid fa-cart-shopping text-[#4D5358]"></i>
            </Link>
          </div>

          {/* login model */}
          <div
            className={
              islogin
                ? "absolute top-[20rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white rounded-lg box-shadow w-[25rem] h-[30rem] z-[500] flex flex-col gap-4 p-6"
                : "hidden"
            }
          >
            <div className="flex justify-end">
              <div
                className=" p-2 shadow-md w-[2.1rem] h-[2.1rem] rounded-[100%] flex justify-center items-center border border-dashed cursor-pointer"
                onClick={() => setLogin(false)}
              >
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[#333333] text-xl font-bold">Welcome!</h2>
              <p className="text-sm font-normal text-[#333333]">
                Sign up or log in to continue
              </p>
            </div>
            <div className="w-full h-9 rounded-md bg-[#1877f2] flex gap-12 items-center pl-4 cursor-pointer hover:bg-[#60a2f6]">
              <i class="fa-brands fa-facebook text-[white]"></i>
              <span className="text-sm font-bold text-white text-center">
                Continue with Facebook
              </span>
            </div>
            <div className="w-full h-9 rounded-md bg-[black] flex gap-12 items-center pl-4 cursor-pointer">
              <i class="fa-brands fa-apple text-white text-base"></i>
              <span className="text-sm font-bold text-white text-center">
                Continue with Apple
              </span>
            </div>
            <div className="w-full text-center">
              <p className="text-[#707070] text-sm font-normal">or</p>
            </div>
            <div
              className="w-full h-10 rounded-md bg-[#E11B70] cursor-pointer text-center flex justify-center items-center"
              onClick={() => LoginBtnhandler("login")}
            >
              <span className="text-sm font-bold text-white">Log in</span>
            </div>
            <div
              className="w-full h-10 rounded-md border border-black text-[#39434d] cursor-pointer text-center flex justify-center items-center hover:bg-[#fdf2f7] hover:border-[#fdf2f7] hover:text-[#171F26]"
              onClick={() => LoginBtnhandler("sign")}
            >
              <span className="text-sm font-bold  ">Sign up</span>
            </div>
            <p className="text-[#707070] text-sm font-normal text-justify">
              By signing up, you agree to our&nbsp;
              <Link to="/" className="text-[#E11B70] font-medium">
                Terms and Conditions{" "}
              </Link>
              and
              <Link to="/" className="text-[#E11B70] font-medium">
                {" "}
                Privacy Policy
              </Link>
            </p>
          </div>
          {/* login from */}
          {isLoginBtn === "login" ? (
            <Login
              LoginBtnArrowhandler={LoginBtnArrowhandler}
              setIsLoginBtn={setIsLoginBtn}
            />
          ) : isLoginBtn === "sign" ? (
            <SignUp
              LoginBtnArrowhandler={LoginBtnArrowhandler}
              setIsLoginBtn={setIsLoginBtn}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      {/* mobaile Navbar */}
      <div className="w-full h-[4rem] border shadow-md sm:hidden flex justify-center items-center ">
        <div className="container flex justify-between items-center pl-3 pr-3">
          <div>
            <i class="fa-solid fa-user text-[#4D5358]"></i>
          </div>

          <Link to="/" className="flex gap-2 items-center">
            <div className="w-7 h-7 flex justify-center items-center rounded-md">
              <img src={logo} alt="" />
            </div>
            <span className="text-xl font-medium text-[#E21B70]">
              foodpanda
            </span>
          </Link>

          <div className="w-8 h-8 hover:bg-[#F0F2F2] flex justify-center items-center rounded-[100%] cursor-pointer">
            <i class="fa-solid fa-cart-shopping text-[#4D5358]"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar