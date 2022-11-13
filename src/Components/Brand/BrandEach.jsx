import React from "react";
import { useParams, Link } from "react-router-dom";
import Data from "../../utils/AllData";
import currencyFormatter from "../../utils/CurrencyFormatter";

function BrandEach() {
  const { brandName } = useParams();
  const phonesData = Data[brandName];
  return (
    <div className=" pt-[4rem] bg-[#cee1f3] sm:flex sm:flex-wrap sm:justify-center">
      {phonesData.map((data, index) => (
        <Link
          to={`/brand/${brandName}/${data.id}`}
          key={data.id}
          className=" shadow-[inset_-12px_-8px_40px_#46464620] bg-[#cee1f3] hover:bg-[#bcd8f2] border-b-4 lg:border-b-0 border-white flex py-4 sm:w-[50%] lg:w-[33.33%] 2xl:w-[25%]"
        >
          <div className=" w-[45%] lg:w-[20rem] flex justify-start items-center">
            <img
              className=" w-[11rem] lg:w-[20rem] lg:min-h-[12rem] min-h-[10rem]"
              src={data.imgLink}
            ></img>
          </div>
          <div className=" justify-center flex flex-col w-[55%] min-h-[11rem]">
            <span className=" text-[1.25rem] lg:text-[1.4rem] lg:font-semibold font-light">
              {data.phoneName}
            </span>
            <span className=" text-[1rem] font-light">{data.color}</span>
            <span className=" text-[1.5rem] font-semibold">
              {currencyFormatter.format(data.price)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BrandEach;
