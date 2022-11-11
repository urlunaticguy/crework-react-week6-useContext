import { React, useContext } from "react";
import AppContext from "../../Context/AppContext";
import Data from "../../utils/AllData";

function Favourites() {
  const cxt = useContext(AppContext);
  const favArray = cxt.favouriteData;
  return (
    <div className=" pt-[5rem]">
      {favArray.map((data, index) => (
        <div>{Data[data[0]][data[1]].phoneName}</div>
      ))}
    </div>
  );
}

export default Favourites;
