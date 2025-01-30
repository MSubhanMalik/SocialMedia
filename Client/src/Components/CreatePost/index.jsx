import { Avatar, Button, TextInput } from "flowbite-react";
import React from "react";
import { FaPhotoVideo } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlinePhoto } from "react-icons/hi2";
import { MdPlayCircleOutline } from "react-icons/md";
import { GrSchedule } from "react-icons/gr";
import BaseInput from "../base/BaseInput";

function CreatePost() {
  const icons = [
    {
      icon: <HiOutlinePhoto size={25} />,
      text: "Photos",
      color: "text-green-600",
    },
    {
      icon: <MdPlayCircleOutline size={25} />,
      text: "Videos",
      color: "text-blue-700",
    },
    {
      icon: <IoLocationOutline size={25} />,
      text: "Location",
      color: "text-red-400",
    },
    {
      icon: <GrSchedule size={25} />,
      text: "Schedule",
      color: "text-orange-300",
    },
  ];
  return (
    <div className="h-1/4 w-full rounded-lg shadow-lg p-2">
      <div className="flex gap-x-2">
        <div>
          <Avatar rounded />
        </div>
        <div className="w-full">
          <BaseInput placeholder = "Whats happening?" />
          <div className="flex gap-x-4 mt-2 justify-evenly text-sm">
            {icons.map((i) => {
              return (
                <div className={`flex items-center gap-x-1 ${i.color}`}>
                  {i.icon}
                  <span className="text-sm">{i.text}</span>
                </div>
              );
            })}
            <div>
              <Button size="sm">Share</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
