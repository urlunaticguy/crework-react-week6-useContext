import React from "react";
import { Link } from "react-router-dom";

function HomeButtons() {
  return (
    <div className=" text-center mt-[14rem] flex flex-col text-black w-[94%] items-end pr-[1rem] gap-[1.5rem] border-r-[3px] border-white">
      <button className=" w-[10rem] bg-white/90 rounded-full p-2">
        Explore by Price
      </button>
      <Link to="/brandHome" className=" w-[10rem] bg-white/90 rounded-full p-2">
        Explore by Brand
      </Link>
      <button className=" w-[10rem] bg-white/90 rounded-full p-2">
        Explore All
      </button>
    </div>
  );
}

export default HomeButtons;
