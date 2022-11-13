import { React, useRef, useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../../Context/AppContext";
import Data from "../../utils/AllData";
import FloatingFeature from "./FloatingFeature";
import currencyFormatter from "../../utils/CurrencyFormatter";

function SingleListing() {
  const [first, setfirst] = useState(0);
  const [buttonText, setBT] = useState("Add to Cart");
  const cxt = useContext(AppContext);
  const ref = useRef(null);
  const ref1 = useRef(null);
  const { brandName, id } = useParams();
  const info = Data[brandName][id];

  const triggerFavouriteSVG = () => {
    cxt.addToFavourite(brandName, id);
    setfirst(first + 1);
  };
  const triggerAddToCart = () => {
    cxt.addToCart(brandName, id, info.price);
    setBT("Added ✅");
    setTimeout(() => {
      setBT("Add to Cart");
    }, 1500);
  };

  useEffect(() => {
    const divSelector = ref.current;
    divSelector.className =
      info.bgColor +
      " flex flex-col lg:flex-row justify-center items-center w-[100%] min-h-[100vh] pt-[3.2rem] pb-[3rem]";
    const cartSelector = ref1.current;
    cartSelector.className =
      info.cartColor +
      " w-[15rem] lg:w-[18rem] justify-between text-[1rem] lg:text-[1.2rem] flex text-white mt-[0.5rem] px-[20px] py-[12px] rounded-[15px]";
  }, []);
  return (
    <div ref={ref}>
      <div className=" flex flex-col justify-center items-center">
        <div className=" w-[20rem] flex overflow-x-auto overflow-y-hidden no-scrollbar">
          <img className=" w-[20rem] lg:w-[28rem]" src={info.imgLink}></img>
        </div>
        <div className=" w-[20rem] lg:w-[28rem] mt-[1rem] flex gap-[0.8rem] lg:gap-[1rem] justify-center items-center">
          <FloatingFeature data={info.processor} svgIndex={0} />
          <FloatingFeature data={info.rom} svgIndex={1} />
          <FloatingFeature data={info.camera} svgIndex={2} />
        </div>
      </div>
      <div className=" shadow-[rgba(0,_0,_0,_0.6)_0px_3px_8px] w-[20rem] mt-[1.2rem] py-[0.7rem] rounded-[12px] flex flex-col justify-center items-center bg-white lg:w-[25rem] lg:p-[1rem] lg:h-[31rem] lg:justify-between">
        <span className=" flex w-[100%] justify-between px-[1rem] text-[1.4rem] lg:text-[1.6rem] lg:items-center font-semibold">
          {info.phoneName}
          <svg
            onClick={triggerFavouriteSVG}
            xmlns="http://www.w3.org/2000/svg"
            fill={info.favFill}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={info.favStroke}
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </span>
        <span className=" w-[100%] px-[1rem] flex justify-between font-bold text-[1rem] lg:text-[1.2rem]">
          <span>Color</span>
          <span>{info.color}</span>
        </span>
        <span className=" w-[100%] px-[1rem] flex justify-between font-bold text-[1rem] lg:text-[1.2rem]">
          <span>Display</span>
          <span>{info.screen}</span>
        </span>
        <span className="hidden w-[100%] px-[1rem] lg:flex justify-between font-bold text-[1.2rem]">
          <span>Processor</span>
          <span>{info.processor}</span>
        </span>
        <span className="hidden w-[100%] px-[1rem] lg:flex justify-between font-bold text-[1.2rem]">
          <span>Storage</span>
          <span>{info.rom}</span>
        </span>
        <span className="hidden w-[100%] px-[1rem] lg:flex justify-between font-bold text-[1.2rem]">
          <span>Camera</span>
          <span>{info.camera}</span>
        </span>
        <button ref={ref1}>
          <div className=" flex gap-[0.5rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <span
              onClick={() => {
                triggerAddToCart();
              }}
            >
              {buttonText}
            </span>
          </div>
          <span className=" font-semibold">
            {currencyFormatter.format(info.price)}
          </span>
        </button>
      </div>
    </div>
  );
}

export default SingleListing;
