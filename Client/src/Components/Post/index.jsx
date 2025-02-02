import { Carousel } from "flowbite-react";
import { MdOutlineHeartBroken, MdOutlineShare } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import React from "react";
import BaseCarousal from './../base/BaseCarousal';

function Post() {
  const images = [
    {
      path: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    },
    {
      path: "https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg",
    },
    {
      path: "https://cdn.pixabay.com/photo/2024/01/31/18/39/vibrant-8544591_1280.png",
    },
  ];
  return (
    <div className="shadow-md w-fit p-6 flex flex-col rounded-2xl">
      <BaseCarousal
      images = {images}
      >
      </BaseCarousal>
      <div className="p-2 flex flex-col gap-y-2">
        <div className="flex gap-x-4">
          <MdOutlineHeartBroken size={25} />
          <FaRegComment className="" size={25} />
          <MdOutlineShare className="" size={25} />
        </div>
        <div>
          <span className="text-slate-400 text-sm">1200 likes</span>
        </div>
        <div>
          <div id="Comment" className="flex text-md gap-x-1">
            <span className="font-semibold">Subhan</span>
            Great to see you again!.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
