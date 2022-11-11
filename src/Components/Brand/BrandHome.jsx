import React from "react";
import { Link } from "react-router-dom";
import BackgroundImg from "../../assets/images/BgBrandHome.jpeg";

function BrandHome() {
  return (
    <div className=" h-[100vh] flex justify-center items-center">
      <img
        className=" min-h-[100vh] absolute -z-10 object-cover"
        src={BackgroundImg}
      ></img>
      <div className=" w-[20rem] flex flex-col justify-center items-center bg-white rounded-[15px] shadow-[rgba(0,_0,_0,_0.5)_0px_3px_8px]">
        <h1 className=" text-[1.5rem] bg-white text-purple-600 font-semibold p-2">
          Please Select a Brand
        </h1>
        <Link
          to="/brand/apple"
          className=" text-[1.5rem] bg-white text-purple-600 font-semibold p-2 rounded-full border-4 border-purple-600"
        >
          Apple
        </Link>
      </div>
    </div>
  );
}

export default BrandHome;
