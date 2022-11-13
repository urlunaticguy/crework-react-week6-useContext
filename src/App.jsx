import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import AppState from "./Context/AppState";
import BrandHome from "./Components/Brand/BrandHome";
import BrandEach from "./Components/Brand/BrandEach";
import SingleListing from "./Components/SingleListing/SingleListing";
import Cart from "./Components/Cart/Cart";
import Favourites from "./Components/Favourite/Favourites";

function App() {
  return (
    <AppState>
      <nav className=" absolute w-[100%] h-[3rem] bg-white/40 flex items-center justify-between">
        <Link to="/favourites">
          <span className="hidden hover:underline hover:font-semibold px-[1rem] text-[1.1rem] bg-transparent lg:block">
            Favourites
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="red"
            className="w-[2rem] p-1 lg:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </Link>
        <Link
          to="/"
          className=" text-black text-[1.2rem] font-extrabold lg:text-[1.5rem]"
        >
          Smart Mobile Zone
        </Link>
        <Link to="/cart">
          <span className="hidden hover:underline hover:font-semibold px-[1rem] text-[1.1rem] bg-transparent lg:block">
            Cart
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-[2rem] p-1 lg:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/brandHome" element={<BrandHome />}></Route>
        <Route path="/brand/:brandName" element={<BrandEach />}></Route>
        <Route path="/brand/:brandName/:id" element={<SingleListing />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/favourites" element={<Favourites />}></Route>
      </Routes>
    </AppState>
  );
}

export default App;
