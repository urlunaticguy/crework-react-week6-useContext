import React from "react";
import { Link } from "react-router-dom";

function HomeButtons() {
  return (
    <div className=" text-center mt-[14rem] lg:text-[1.5rem] flex flex-col lg:flex-row text-black w-[94%] items-end lg:justify-end lg:items-center pr-[1rem] gap-[1.5rem] border-r-[3px] border-white lg:border-r-[5px]">
      <button className=" hover:bg-slate-300 hover:underline shadow-[rgba(0,_0,_0,_0.6)_0px_3px_10px] w-[10rem] lg:w-auto bg-white/90 rounded-full p-2 lg:px-[1rem] lg:py-[0.5rem]">
        Explore by Price
      </button>
      <Link
        to="/brandHome"
        className=" hover:bg-slate-300 hover:underline shadow-[rgba(0,_0,_0,_0.6)_0px_3px_10px] w-[10rem] lg:w-auto bg-white/90 rounded-full p-2 lg:px-[1rem] lg:py-[0.5rem]"
      >
        Explore by Brand
      </Link>
      <button className=" hover:bg-slate-300 hover:underline shadow-[rgba(0,_0,_0,_0.6)_0px_3px_10px] w-[10rem] lg:w-auto bg-white/90 rounded-full p-2 lg:px-[1rem] lg:py-[0.5rem]">
        Explore All
      </button>
    </div>
  );
}

export default HomeButtons;
