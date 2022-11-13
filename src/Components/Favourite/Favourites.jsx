import { React, useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../Context/AppContext";
import Data from "../../utils/AllData";
import currencyFormatter from "../../utils/CurrencyFormatter";

function Favourites() {
  const [first, setfirst] = useState(0);
  const cxt = useContext(AppContext);
  const favArray = cxt.favouriteData;
  const triggerDeleteFromFavourites = (brName, i) => {
    cxt.removeFromFavourites(brName, i);
    setfirst(first + 1);
  };
  return (
    <div className=" min-h-screen pt-[4rem] pb-[1rem] bg-blue-300 px-4 lg:flex lg:flex-col lg:items-center">
      {favArray.length === 0 && (
        <div className="shadow-[rgba(0,_0,_0,_0.6)_0px_5px_10px] text-[1.2rem] text-center w-[100%] lg:w-[40rem] bg-white p-2 rounded-[15px]">
          <strong>You have added no items in Favourite.</strong>
        </div>
      )}
      {favArray.map((data, index) => (
        <div
          key={Data[data[0]][data[1]].id}
          className=" hover:bg-slate-50 mb-[1.5rem] shadow-[rgba(0,_0,_0,_0.6)_0px_5px_10px] text-[1.2rem] flex flex-col justify-center items-center text-center w-[100%] lg:w-[40rem] bg-white p-2 rounded-[15px]"
        >
          <div className=" flex w-[100%]">
            <Link to={"/brand/" + data[0] + "/" + data[1]}>
              <img
                className=" w-[10rem] lg:w-[15rem]"
                src={Data[data[0]][data[1]].imgLink}
              ></img>
            </Link>
            <div className=" flex flex-col w-[70%] px-[0.5rem] lg:justify-center justify-start text-start text-[1rem] lg:text-[1.2rem]">
              <strong>{Data[data[0]][data[1]].phoneName}</strong>
              <span>{Data[data[0]][data[1]].color}</span>
              <span>{Data[data[0]][data[1]].rom}</span>
              <strong>
                {currencyFormatter.format(Data[data[0]][data[1]].price)}
              </strong>
              <button
                onClick={() => {
                  triggerDeleteFromFavourites(data[0], data[1]);
                }}
                className=" text-[0.8rem] lg:text-[1rem] mt-[0.5rem] bg-red-300 w-[11rem] lg:w-[13rem] p-[0.4rem] rounded-full hover:bg-red-600 hover:text-white"
              >
                Remove from Favourites
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Favourites;
