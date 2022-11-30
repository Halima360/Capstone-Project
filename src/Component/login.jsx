import React from 'react'
import { FcGoogle } from "react-icons/fc";
import signinimage from "../img/signin.png";
import { Footer } from './footer';
import { Nav } from './navbar';
const Login = () => {
  return (
    <div className="w-400px md:w-[100%] mx-auto">
      <Nav/>
      <div className="flex flex-col mt-20 lg:flex-row items-center mx-auto">
        <div className="w-2/3 md:w-1/2 lg:h-[944px]">
          <img src={signinimage} alt="sign--in--image" className="w-[100%]" />
        </div>
        <div className="w-1/2 flex flex-col items-center pt-[50px] ">
          <div className="text-center mb-[150px]">
            <p className="text-[24px]">Welcome to iMarket</p>
            <p className="text-[12px] text-[#555555]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>
          <button className="flex items-center gap-1 rounded-[8px] bg-[#EFEFEF] hover:bg-slate-300 h-[60px] w-[360px] md:w-[432px] justify-center">
            <FcGoogle size={30} />
            Login with Google
          </button>
          <div className="flex items-center gap-3 my-[25px]">
            <hr className="w-[160px] md:w-[195px] h-[2px] bg-[#C4C4C4]" />
            <p>or</p>
            <hr className="w-[160px] md:w-[195px] h-[2px] bg-[#C4C4C4]" />
          </div>
          <form action="" className="flex flex-col items-center justify-center py-5">
            <input
              type="text"
              placeholder="Enter email address"
              required
              className="p-2 pl-4 outline-none rounded-[8px] border border-[#C4C4C4] w-[300px] md:w-[432px] h-[60px] mb-5"
            />
            <input
              type="password"
              placeholder="Enter password"
              required
              className="p-2 pl-4 outline-none rounded-[8px] border border-[#C4C4C4] w-[300px] md:w-[432px] h-[60px] mb-5"
            />
            <button className="bg-[#053161] hover:bg-[#053161cc] text-white rounded-[8px] w-[300px] md:w-[432px] h-[60px] mb-5">
              Login
            </button>
            <p className="text-center text-[#808080]">
              Dont have an account?{" "}
              <a href='signup' className="text-[#FF6A34] cursor-pointer hover:text-[#ff6a34bb]">
                {" "}
                Create Account
              </a>
            </p>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Login

