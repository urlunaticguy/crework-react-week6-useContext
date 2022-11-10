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
      <div className=" w-[100%] h-[35rem] flex flex-col justify-center items-center">
        <h1 className=" text-[1.5rem] bg-white text-purple-600 font-semibold p-2 rounded-full border-4 border-purple-600">
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
