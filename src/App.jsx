import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import CategoryHome from "./Components/Category/CategoryHome";
import AppState from "./Context/AppState";
import BrandHome from "./Components/Brand/BrandHome";
import BrandEach from "./Components/Brand/BrandEach";
import SingleListing from "./Components/SingleListing/SingleListing";

function App() {
  const [count, setCount] = useState(0);
  // const ref = useRef(null);

  // useEffect(() => {
  //   hey(0);
  // }, []);

  // let colorClass = `bg-yellow-500`;
  // let xxx = [
  //   "bg-green-500",
  //   "bg-blue-500",
  //   "bg-pink-500",
  //   "bg-purple-500",
  //   "bg-yellow-500",
  // ];

  // let a = 1;

  // const hey = (abc) => {
  //   const not = ref.current;
  //   colorClass = xxx[abc];
  //   not.className = colorClass + " h-[15rem]";
  // };

  return (
    <AppState>
      <nav className=" absolute w-[100%] h-[3rem] bg-white/40 flex items-center justify-center">
        <Link className=" text-black text-[1.2rem] font-extrabold">
          Smart Mobile Zone
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/catHome" element={<CategoryHome />}></Route>
        <Route path="/brandHome" element={<BrandHome />}></Route>
        <Route path="/brand/:brandName" element={<BrandEach />}></Route>
        <Route path="/brand/:brandName/:id" element={<SingleListing />}></Route>
      </Routes>
    </AppState>
  );
  // <div
  //   ref={ref}
  //   onClick={() => {
  //     hey(a++);
  //   }}
  // >
  //   Hi
  //   <button>Click Me</button>
  // </div>
}

export default App;
