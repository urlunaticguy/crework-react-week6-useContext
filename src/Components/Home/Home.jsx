import React from "react";
import BgImage from "./BgImage";
import HomeButtons from "./HomeButtons";
import HomeTitle from "./HomeTitle";

function Home() {
  return (
    <div className=" min-h-[100vh]">
      <BgImage />
      <HomeTitle />
      <HomeButtons />
    </div>
  );
}

export default Home;
