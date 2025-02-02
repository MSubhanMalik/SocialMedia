import React, { useState } from "react";
import { HiOutlinePhoto } from "react-icons/hi2";
import { MdPlayCircleOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { GrSchedule } from "react-icons/gr";

function IconPost({ updateImage }) {

  const funcs = {
    handleImages: (e) => updateImage(e),
    handleVideos: (e) => console.log(e),
    handleLocation: (e) => console.log(e),
    handleSchedule: (e) => console.log(e),
  };

  const icons = [
    {
      icon: <HiOutlinePhoto size={25} />,
      text: "Images",
      color: "text-green-600",
      handler: funcs.handleImages,
    },
    {
      icon: <MdPlayCircleOutline size={25} />,
      text: "Videos",
      color: "text-blue-700",
      handler: funcs.handleVideos,
    },
    {
      icon: <IoLocationOutline size={25} />,
      text: "Location",
      color: "text-red-400",
      handler: funcs.handleLocation,
    },
    {
      icon: <GrSchedule size={25} />,
      text: "Schedule",
      color: "text-orange-300",
      handler: funcs.handleSchedule,
    },
  ];

  const Icon = ({ icon, onClick, children }) => (
    <div onClick={onClick}>
      {icon} {children}
    </div>
  );

  return icons.map((i, index) => {
    const inputId = `input${index}`;
    return (
      <div className={`flex cursor-pointer items-center gap-x-1 ${i.color}`}>
        <Icon
          icon={i.icon}
          onClick={() => document.getElementById(inputId).click()}
        >
          <input
            id={inputId}
            type="file"
            hidden
            onChange={i.handler}
          />
        </Icon>
        <span className="text-sm">{i.text}</span>
      </div>
    );
  });
}

export default IconPost;
