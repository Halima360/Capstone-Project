import React from "react";
import { HiArrowLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Verification = ()=>{
    return(
        <div>
            <div className="flex flex-col items-center justify-center mt-32">
                <h1 className="font-bold">Verify account</h1>
                <p className="text-gray-500 text-center">Enter the 6-digit code that was to username@gmail.com</p>
                <form action="" className="flex flex-col items-center justify-center py-5">
            <input
              type="num"
              placeholder="Enter code"
              required
              className="p-2 pl-4 outline-none rounded-[8px] text-center border border-[#C4C4C4] w-[250px] md:w-[432px] h-[60px] mb-5"
            />
           
            <button className="bg-[#053161] hover:bg-[#053161cc] text-white rounded-[8px] w-[250px] md:w-[432px] h-[60px] mb-5">
            Verify my account
            </button>
            <p className="text-center text-[#808080]">
            Didn’t receive any code? {" "}
              <a href='signup' className="text-[#FF6A34] cursor-pointer hover:text-[#ff6a34bb]">
                {" "}
                Resend
              </a>
            </p>
          </form>
            </div>
            <Link to="/signup" className="flex flex-row items-center justify-center space-x-2 mt-20">
                <HiArrowLeft/>
                <p className="text-sm font-semibold">Go back</p>
            </Link>
        </div>
    )

}
export default Verification;