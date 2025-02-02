import React from "react";
import { FaSearch } from "react-icons/fa";

const DEFAULT_VALUES = {
  placeholder: "",
  width: "",
  search: true,
  shadow: "shadow-lg",
};

function Base({ placeholder, width, search, value, setValue, shadow, icon }) {
  return (
    <div className="relative w-full">
      {icon && <FaSearch className="absolute mt-3 left-3" />}
      <input
        placeholder={placeholder}
        value={value}
        setValue={(e) => setValue(e.target.value)}
        className={`p-2 ${icon? "pl-10": ""} focus:${shadow} ${width} transition-all duration-300 ease-in-out w-full focus:outline-none rounded-lg bg-gray-100`}
      ></input>
    </div>
  );
}

const BaseInput = (props) => {
  return <Base {...DEFAULT_VALUES} {...props} />;
};

export default BaseInput;
