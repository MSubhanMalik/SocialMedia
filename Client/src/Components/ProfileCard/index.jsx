import React from "react";
import { Avatar } from "flowbite-react";

function ProfileCard() {
  const data = [
    {
      name: "Following",
      value: 5123,
      line: true,
    },
    {
      name: "Followers",
      value: 53,
      line: true,
    },
    {
      name: "Posts",
      value: 3,
    },
  ];
  return (
      <div className="w-full shadow-lg rounded-2xl overflow-hidden h-96">
        <div
          className="h-1/3 w-full"
          style={{
            backgroundImage: `url("https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
        <div className="flex justify-center rounded-b-full shadow-lg mb-4 border-slate-400">
          <Avatar
            className="w-24 h-24 -mt-12 relative"
            rounded
            size="lg"
            img="https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg"
          />
        </div>
        <div className="h-1/2 flex items-center font-sans text-xl flex-col">
          <div className="font-semibold">Muhammad Subhan</div>
          <div className="text-lg">Senior Designer</div>
          <div className="flex mt-6 px-4 w-full">
            {data.map((i) => {
              return (
                <div className="w-1/3 flex items-center">
                  <div className="flex flex-col border-b p-2 border-slate-400 border-t items-center w-full">
                    <span>
                      <b>{i.value}</b>
                    </span>
                    <span className="font-light text-lg">{i.name}</span>
                  </div>
                  {i.line && (
                    <div className="h-8 w-0 border-slate-300 border"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
  );
}

export default ProfileCard;
