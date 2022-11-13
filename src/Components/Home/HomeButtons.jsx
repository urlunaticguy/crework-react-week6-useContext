import React from "react";
import { Link } from "react-router-dom";
import SvgAndroid from "./SvgAndroid";
import SvgIOS from "./SvgIOS";

function HomeButtons() {
  return (
    <div className=" text-center mt-[14rem] lg:text-[1.5rem] flex flex-col lg:flex-row text-black w-[94%] items-end lg:justify-end lg:items-center pr-[1rem] gap-[1.5rem] border-r-[3px] border-white lg:border-r-[5px]">
      <Link
        to="/brand/samsung"
        className=" hover:bg-slate-300 hover:underline shadow-[rgba(0,_0,_0,_0.6)_0px_3px_10px] w-[12rem] lg:w-auto bg-white/90 rounded-full p-2 lg:px-[1rem] lg:py-[0.5rem] flex items-center justify-center"
      >
        Explore Android
        <SvgAndroid />
      </Link>
      <Link
        to="/brand/apple"
        className=" hover:bg-slate-300 hover:underline shadow-[rgba(0,_0,_0,_0.6)_0px_3px_10px] w-[12rem] lg:w-auto bg-white/90 rounded-full p-2 lg:px-[1rem] lg:py-[0.5rem] flex items-center justify-center"
      >
        Explore iOS
        <SvgIOS />
      </Link>
    </div>
  );
}

export default HomeButtons;
