import { React, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import Data from "../../utils/AllData";

function SingleListing() {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const { brandName, id } = useParams();
  const info = Data[brandName][id];
  useEffect(() => {
    const divSelector = ref.current;
    divSelector.className =
      info.bgColor +
      " flex flex-col justify-center items-center w-[100%] min-h-[100vh] pt-[3.2rem] pb-[3rem]";
    const cartSelector = ref1.current;
    cartSelector.className =
      info.cartColor +
      " w-[15rem] justify-between text-[1.2rem] flex text-white mt-[0.5rem] px-[12px] py-[5px] rounded-[8px]";
  }, []);
  return (
    <div ref={ref}>
      <img className=" w-[20rem]" src={info.imgLink}></img>
      <div className=" w-[20rem] mt-[0.5rem] py-[0.7rem] rounded-[12px] flex flex-col justify-center items-center bg-white">
        <span className=" text-[1.4rem] font-semibold">{info.phoneName}</span>
        <span className=" font-bold text-[1rem]">Color : {info.color}</span>
        <span className=" font-bold text-[1rem]">{info.processor}</span>
        <span className=" font-bold text-[1rem]">{info.rom}</span>
        <span className=" font-bold text-[1rem]">{info.screen}</span>
        <span className=" font-bold text-[1rem]">{info.camera}</span>
        <button ref={ref1}>
          <div>
            <span>Add to Cart</span>
          </div>
          <span>₹{info.price}</span>
        </button>
      </div>
    </div>
  );
}

export default SingleListing;
