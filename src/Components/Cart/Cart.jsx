import { React, useContext, useState, useEffect } from "react";
import AppContext from "../../Context/AppContext";
import Data from "../../utils/AllData";
import currencyFormatter from "../../utils/CurrencyFormatter";
import CheckoutButton from "./CheckoutButton";
import MinusSVG from "./MinusSVG";
import PlusSVG from "./PlusSVG";

function Cart() {
  const [cartAmount, setfirst] = useState(0);
  const [fakeRender, setfakerender] = useState(1);
  const cxt = useContext(AppContext);
  const cartArray = cxt.cartData;
  useEffect(() => {
    setfirst(cxt.cartTotal);
  }, [cartArray]);

  const triggerUpdateCart = (companyName, indexPos, opSupplier) => {
    cxt.updateFromCart(
      companyName,
      indexPos,
      opSupplier,
      Data[companyName][indexPos].price
    );
    setfakerender(fakeRender + 1);
  };

  return (
    <div className=" min-h-screen pt-[4rem] pb-[1rem] bg-blue-300 px-4">
      {cartArray.length === 0 && (
        <div className="shadow-[rgba(0,_0,_0,_0.6)_0px_5px_10px] text-[1.2rem] text-center w-[100%] bg-white p-2 rounded-[15px]">
          <strong>You have no items in Cart.</strong>
        </div>
      )}
      {cartArray.length > 0 && (
        <div className=" mb-[1.5rem] shadow-[rgba(0,_0,_0,_0.6)_0px_5px_10px] text-[1.2rem] flex flex-col justify-center items-center text-center w-[100%] bg-white p-2 rounded-[15px]">
          <span className=" font-bold">
            Cart Amount = {currencyFormatter.format(cartAmount)}
          </span>
          <CheckoutButton />
        </div>
      )}
      {cartArray.map((data, index) => (
        <div className=" mb-[1.5rem] shadow-[rgba(0,_0,_0,_0.6)_0px_5px_10px] text-[1.2rem] flex flex-col justify-center items-center text-center w-[100%] bg-white p-2 rounded-[15px]">
          <div className=" flex w-[100%]">
            <div className="">
              <img
                className=" w-[10rem]"
                src={Data[data[0]][data[1]].imgLink}
              ></img>
            </div>
            <div className=" flex flex-col w-[70%] px-[0.5rem] justify-start text-start text-[1rem]">
              <strong>{Data[data[0]][data[1]].phoneName}</strong>
              <span>{Data[data[0]][data[1]].color}</span>
              <span>{Data[data[0]][data[1]].rom}</span>
              <span className=" flex justify-start items-center">
                <span className=" mr-[0.2rem]">Qty</span>
                <div
                  onClick={() => {
                    triggerUpdateCart(data[0], data[1], 0);
                  }}
                >
                  <MinusSVG />
                </div>
                <span className=" mx-[0.5rem]">{data[2]}</span>
                <div
                  onClick={() => {
                    triggerUpdateCart(data[0], data[1], 1);
                  }}
                >
                  <PlusSVG />
                </div>
              </span>
              <strong>
                {currencyFormatter.format(Data[data[0]][data[1]].price)}
              </strong>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
