import Data from "../utils/AllData";
import AppContext from "./AppContext";

const cartData = [];
const favouriteData = [];
let cartTotal = [0];

const AppState = (props) => {
  const addToCart = (brandName, index, price) => {
    let flagx = true;
    for (let i = 0; i < cartData.length; i++) {
      let pickElement = cartData[i];
      if (pickElement[0] === brandName && pickElement[1] === index) {
        cartData[i][2] = cartData[i][2] + 1;
        flagx = false;
        cartTotal[0] = cartTotal[0] + price;
        break;
      }
    }
    if (flagx) {
      cartData.push([brandName, index, 1]);
      cartTotal[0] = cartTotal[0] + price;
    }
  };
  const updateFromCart = (brandName, index, op, cost) => {
    for (let i = 0; i < cartData.length; i++) {
      let grabItem = cartData[i];
      if (grabItem[0] === brandName && grabItem[1] === index) {
        if (op === 0) {
          cartData[i][2] = grabItem[2] - 1;
          cartTotal[0] = cartTotal[0] - cost;
        } else if (op === 1) {
          cartData[i][2] = grabItem[2] + 1;
          cartTotal[0] = cartTotal[0] + cost;
        }
        if (cartData[i][2] === 0) {
          cartData.pop(i);
        }
        break;
      }
    }
  };
  const addToFavourite = (brandName, index) => {
    let flag = true;
    let x = Data[brandName][index].favFill;
    let y = Data[brandName][index].favStroke;
    if (x === "none") {
      Data[brandName][index].favFill = "red";
    } else if (x === "red") {
      Data[brandName][index].favFill = "none";
    }
    if (y === "currentColor") {
      Data[brandName][index].favStroke = "red";
    } else if (y === "red") {
      Data[brandName][index].favStroke = "currentColor";
    }
    for (let i = 0; i < favouriteData.length; i++) {
      let grabElement = favouriteData[i];
      if (grabElement[0] === brandName && grabElement[1] === index) {
        favouriteData.pop(i);
        flag = false;
        break;
      }
    }
    if (flag) {
      favouriteData.push([brandName, index]);
    }
  };

  const removeFromFavourites = (brandName, index) => {
    Data[brandName][index].favStroke = "currentColor";
    Data[brandName][index].favFill = "none";
    for (let i = 0; i < favouriteData.length; i++) {
      let grabElement = favouriteData[i];
      if (grabElement[0] === brandName && grabElement[1] === index) {
        favouriteData.pop(i);
        break;
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        cartData,
        favouriteData,
        addToCart,
        addToFavourite,
        cartTotal,
        updateFromCart,
        removeFromFavourites,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
