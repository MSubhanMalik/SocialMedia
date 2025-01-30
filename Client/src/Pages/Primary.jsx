import React from "react";

function Primary({ element, rSide = false, lSide = false }) {
  return (
    <div className="w-full h-screen gap-x-2 flex p-3">
      <div className="w-full">{element}</div>
    </div>
  );
}

export default Primary;
