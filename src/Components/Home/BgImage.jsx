import React from "react";
import ImgHomeBg from "../../assets/images/HomeBackgrnd.webp";

function BgImage() {
  return (
    <img
      className=" min-h-[100vh] absolute -z-10 lg:h-[100vh] lg:w-[100%] lg:object-fill"
      src={ImgHomeBg}
    ></img>
  );
}

export default BgImage;
