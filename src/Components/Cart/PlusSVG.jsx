import React from "react";

function PlusSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="green"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="white"
      className="w-[2rem] hover:cursor-pointer"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export default PlusSVG;
