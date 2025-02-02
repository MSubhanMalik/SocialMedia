import React, { useState } from "react";
import {
  FaCircleArrowRight,
  FaCircleArrowLeft,
  FaCircle,
} from "react-icons/fa6";

function BaseCarousal({ children, images }) {
  const [current, setCurrent] = useState(0);
  return (
    // Important Relative Class
    <div className="w-96 h-96 border relative">
      <div className="w-full h-full">
        <button
          className="absolute left-1 top-1/2 transform -translate-y-1/2"
          onClick={() => setCurrent(current - 1)}
          disabled={current == 0}
        >
          <FaCircleArrowLeft className="opacity-40 hover:opacity-100 text-white text-3xl" />
        </button>
        <img
          className="w-full h-full object-cover"
          src={images[current].path}
        />
        <button
          className="absolute right-1 top-1/2 transform -translate-y-1/2"
          onClick={() => setCurrent(current + 1)}
          disabled={current == images?.length - 1}
        >
          <FaCircleArrowRight
            className={`opacity-40 hover:opacity-100 text-white top-1/2 text-3xl cursor-pointer`}
          />
        </button>
        <div className="flex gap-x-1 w-full justify-center absolute bottom-1">
          {images.map((i, index) => (
            <FaCircle className={`text-white ${index == current? "opacity-80":"opacity-20"}  text-xs`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BaseCarousal;
