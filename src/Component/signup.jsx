import React from "react";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import signupimage from "../img/signup.png";
import { Footer } from "./footer";
import { Nav } from "./navbar";
const SignUp = () => {
  
  return (
    <div className="w-400px md:w-[100%] mx-auto">
      <Nav/>
      <div className="flex flex-col lg:flex-row items-center justify-center mx-auto">
        <div className="w-2/2 px-3 md:w-1/2 lg:h-[944px]">
          <img
            src={signupimage}
            alt="login--image"
            className="w-[100%] object-cover"
          />
        </div>
        <div className="w-1/2 flex flex-col items-center pt-[50px] ">
          <div className="text-center mb-[30px]">
            <p className="text-[24px]">Welcome to iMarket</p>
            <p className="text-[12px] text-[#555555]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>

          <form action="" className="flex flex-col items-center justify-center px-20 py-5">
            <input
              type="text"
              placeholder="Enter full name"
              required
              className="p-2 pl-4 outline-none rounded-[8px] border border-[#C4C4C4] w-[280px] md:w-[432px] h-[60px] mb-5"
            />
            <div className="relative">
              <input
                type="number"
                id="number"
                placeholder="Enter phone number"
                required
                className="p-2 pl-20 outline-none rounded-[8px] border border-[#C4C4C4] w-[280px] md:w-[432px] h-[60px] mb-5"
              />
              <p className="absolute top-[23%] left-9">+234</p>
            </div>
            <input
              type="email"
              placeholder="Enter email address"
              required
              className="p-2 pl-4 outline-none rounded-[8px] border border-[#C4C4C4] w-[280px] md:w-[432px] h-[60px] mb-5"
            />
            <div className="relative">
              <input
                type="password"
                placeholder="Enter password"
                required
                className="p-2 pl-4 outline-none rounded-[8px] border border-[#C4C4C4] w-[280px] md:w-[432px] h-[60px] mb-5"
              />
              <BsEye className="absolute top-[23%] right-5 group-focus:hidden" />
            </div>
            <Link to="/verify" >
              <button className="bg-[#053161] text-center m-auto hover:bg-[#053161cc] text-white rounded-[8px] w-[280px] md:w-[432px] h-[60px] mb-5">Create account</button>
            </Link>
            <p className="text-center text-[#808080]">
              Have an account?{" "}
              <a href="login" className="text-[#FF6A34] cursor-pointer hover:text-[#ff6a34bb]">
                {" "}
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SignUp;