import React from "react";
import ChipSVG from "./ChipSVG";
import StorageSVG from "./StorageSVG";
import CameraSVG from "./CameraSVG";

const svgs = [<ChipSVG />, <StorageSVG />, <CameraSVG />];

function FloatingFeature(props) {
  return (
    <div className=" shadow-[rgba(0,_0,_0,_0.45)_0px_3px_8px] min-w-[6rem] bg-white flex flex-col rounded-[1.5rem] justify-center items-center text-center px-2 py-3">
      {svgs[props.svgIndex]}
      <span className=" font-light text-[0.9rem] lg:text-[1.1rem] lg:mt-[0.5rem] lg:font-semibold">
        {props.data}
      </span>
    </div>
  );
}

export default FloatingFeature;
