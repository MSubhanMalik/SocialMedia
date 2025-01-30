import React from "react";
import { FaSearch } from "react-icons/fa";

const DEFAULT_VALUES = {
  placeholder: "",
  width: "",
  search: true,
};

function Base({ placeholder, width, search }) {
  return (
    <div className="relative w-full">
      {search && <FaSearch className="absolute mt-3 left-3" />}
      <input
        placeholder={placeholder}
        className={`p-2 pl-10 focus:shadow-lg ${width} transition-all duration-300 ease-in-out w-full focus:outline-none rounded-lg bg-gray-100`}
      ></input>
    </div>
  );
}

const BaseInput = (props) => {
  return <Base {...DEFAULT_VALUES} {...props} />;
};

export default BaseInput;
