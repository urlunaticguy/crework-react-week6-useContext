import { React, useContext } from "react";
import AppContext from "../../Context/AppContext";

function CategoryHome() {
  const a = useContext(AppContext);
  return (
    <div>
      <span>Hello bitch {a.data}</span>
    </div>
  );
}

export default CategoryHome;
