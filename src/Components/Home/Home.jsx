import React from "react";
import { Link } from "react-router-dom";
import BgImage from "./BgImage";
import HomeButtons from "./HomeButtons";
import HomeTitle from "./HomeTitle";

function Home() {
  return (
    <div className=" min-h-[100vh]">
      <BgImage />
      <HomeTitle />
      <HomeButtons />
      {/* <Link to="/catHome">Click Me</Link> */}
    </div>
  );
}

export default Home;
