import { Carousel } from "flowbite-react";
import {MdElectricMeter, MdHeartBroken, MdMessage, MdModeComment, MdOutlineComment, MdOutlineCommentBank, MdOutlineHeartBroken, MdOutlineIosShare, MdOutlineMessage, MdOutlineShare} from 'react-icons/md'
import {FaCommentSlash, FaHeart, FaRegComment, FaRegCommentAlt, FaRegShareSquare, FaShare, FaWpressr} from 'react-icons/fa'
import React from "react";

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
      <Carousel style={{
            width: "30rem", 
            height: "30rem"
        }}>
        {images.map((image) => (
        <div className="w-full h-full">
          <img className="w-full h-full object-cover" src={image.path} />
          </div>
        ))}
      </Carousel>
      <div className="p-2 flex flex-col gap-y-2">
        <div className="flex gap-x-4">
            <MdOutlineHeartBroken size={25} />
            <FaRegComment className="" size={25}/>
            <MdOutlineShare className="" size={25}/>
        </div>
        <div>
            <span className="text-slate-400 text-sm">1200 likes</span>
        </div>
        <div>
            <div id = "Comment" className="flex text-md gap-x-1">
                <span className="font-semibold">Subhan</span>
                Great to see you again!.
            </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
