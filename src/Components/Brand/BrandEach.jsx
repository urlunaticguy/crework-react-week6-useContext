import React from "react";
import { useParams, Link } from "react-router-dom";
import Data from "../../utils/AllData";

function BrandEach() {
  const { brandName } = useParams();
  const phonesData = Data[brandName];
  return (
    <div className=" pt-[4rem] bg-[#cee1f3]">
      {phonesData.map((data, index) => (
        <Link
          to={`/brand/${brandName}/${data.id}`}
          target="_blank"
          key={data.id}
          className=" bg-[#c5dcf2] border-b-4 border-white flex py-4"
        >
          <div className=" w-[45%] flex justify-start items-center">
            <img className=" w-[11rem] min-h-[10rem]" src={data.imgLink}></img>
          </div>
          <div className=" justify-center flex flex-col w-[55%] min-h-[11rem]">
            <span className=" text-[1.25rem] font-light">{data.phoneName}</span>
            <span className=" text-[1rem] font-light">{data.color}</span>
            <span className=" text-[1.5rem] font-semibold">₹ {data.price}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BrandEach;
