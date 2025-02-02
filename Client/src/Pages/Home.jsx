import React from "react";
import CreatePost from "./../Components/CreatePost";
import Post from "./../Components/Post";
import ProfileCard from "./../Components/ProfileCard";
import Sidebar from "../Components/Sidebar";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import BaseInput from "../Components/base/BaseInput";
import { BiHomeAlt, BiSearch } from "react-icons/bi";
import Followers from "../Components/Followers";
import { IoSettingsSharp } from "react-icons/io5";
import { RiNotification3Line } from "react-icons/ri";
import { TbMessage2 } from "react-icons/tb";
import Trends from "../Components/Trends";

function Home() {
  return (
    <div className="w-full h-screen gap-x-2 flex p-3">
      <div className="w-1/4">
        <Sidebar>
          <div className="flex gap-x-2 items-center">
            <HiOutlineEmojiHappy size={40} />
            <BaseInput placeholder="Search" />
          </div>
          <ProfileCard />
          <Followers />
        </Sidebar>
      </div>
      <div className="w-1/2 flex items-center flex-col gap-y-2">
        <CreatePost />
        <Post />
      </div>
      <div className="w-1/4">
        <Sidebar>
          <div className=" w-full h-auto flex justify-between p-2">
            <BiHomeAlt size={30} />
            <IoSettingsSharp size={30} />
            <RiNotification3Line size={30} />
            <TbMessage2 size={30} />
          </div>
          <Trends />
        </Sidebar>
      </div>
    </div>
  );
}

export default Home;
