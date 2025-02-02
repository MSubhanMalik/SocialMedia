import React from "react";
import BaseInput from "../Components/base/BaseInput";
import { MdAddBox } from "react-icons/md";
import { Avatar } from "flowbite-react";
import { LuSettings2 } from "react-icons/lu";
import { MdKeyboardVoice } from "react-icons/md";
import { PiUploadSimple } from "react-icons/pi";

function Inbox() {
  return (
    <div className="flex h-full">
      <div className="w-1/3 h-auto">
        <div className="flex gap-x-2 items-center">
          <BaseInput placeholder="Search" />
          <MdAddBox size={30} />
        </div>
        <div className="text-xl font-bold flex rounded-3xl">
          <div
            className="w-1/2 flex justify-center cursor-pointer p-3 rounded-3xl items-center focus:bg-gray-200 "
            onFocus={true}
          >
            Primary
          </div>
          <div className="w-1/2 flex justify-center p-3 rounded-3xl items-center">
            Request
          </div>
        </div>
        <div className="bg-gray-100 p-2 rounded-4xl shadow-lg">
          <div className="flex gap-x-2">
            <Avatar rounded />
            <div className="flex w-full flex-col">
              <div className="flex w-full gap-x-2">
                <div className="font-semibold">Hoo Lee</div>
                <div className="text-sm text-gray-300">50m ago</div>
              </div>
              <div className="line-clamp-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                eius magnam possimus dolore cupiditate odit qui ipsam! Quis
                minus facilis error ea repudiandae temporibus aut voluptatum.
                Voluptas deserunt eveniet, repudiandae modi dignissimos ea esse
                laboriosam dolore animi quae, consectetur, error tempore
                doloremque rem doloribus incidunt itaque minus enim perferendis.
                Eum laboriosam corrupti officia doloribus accusantium inventore
                necessitatibus odit sint? Excepturi, minus autem. Sunt nemo
                natus, a amet maiores minima quasi provident, tempore aperiam
                sit, molestiae autem ducimus? Cum eveniet aut reprehenderit,
                saepe suscipit quibusdam corrupti architecto sint fuga nam magni
                quam reiciendis voluptatibus explicabo sit ipsa dolorum tenetur,
                maiores nihil!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/3 px-2 h-full flex flex-col">
        <div className="h-1/8 items-center px-4 border-b border-b-gray-300 bg-gray-100 gap-x-2 flex">
          <Avatar rounded />
          <div className="flex flex-col justify-center">
            <span>Aiz Sheeba</span>
            <span className="text-sm text-gray-300 ">Active now</span>
          </div>
          <div className="ml-auto p-1 rounded-full">
            <LuSettings2 size={25} className="rounded-full ml-auto" />
          </div>
        </div>
        <div className="bg-gray-100 h-6/8 px-2">
          {/* Condition for changing bg depending upon messages */}
          <div className="bg-white p-2 my-2 rounded-2xl shadow-lg">
            <div className="flex gap-x-2 items-center">
              <Avatar rounded />
              <div className="font-bold">Aiz Sheeba</div>
            </div>
            <div>
              Lorem ipsum dolor sit a met consectetur adipisicing elit. Dolores,
              explicabo assumenda ea vel eos culpa perferendis ad autem sapiente
              consequuntur, quis recusandae eveniet. Nostrum blanditiis
              asperiores alias quis modi dignissimos. Maiores molestiae sint cum
              eos impedit quibusdam necessitatibus quidem asperiores, ipsa
              eligendi officiis. Fugiat amet eaque eligendi dicta, reiciendis
              voluptatem optio error ea porro sit dolor expedita consequuntur
              dolores, harum quasi velit quam distinctio commodi repudiandae ex
              quae repellat! Minus itaque ipsa magnam rem omnis e
            </div>
          </div>
        </div>
        <div className="bg-white h-1/8 gap-x-2 flex mt-auto items-center">
          <BaseInput placeholder = "Type something" search={false} />
          <div className="rounded-full p-2 bg-gray-100">
            <MdKeyboardVoice size={25} className="rounded-full" />
          </div>
          <div className="rounded-full p-2 bg-gray-100">
            <PiUploadSimple size={25} className="rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
