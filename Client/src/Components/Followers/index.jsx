import { Avatar, Button } from "flowbite-react";
import React from "react";

function Followers() {
  const users = [
    {
      name: "Muhammad Subhan",
      id: "MSubhanMalik",
    },
    {
      name: "Andrew Thomas",
      id: "AndrewThomas",
    },
    {
      name: "Elon Musk",
      id: "RealMusk",
    },
    {
      name: "FAST NU",
      id: "Nothing",
    },
  ];
  return (
    <div className="w-full h-1/2 shadow-lg rounded-lg p-3">
      <div>
        <div className="text-sm font-semibold">Who is following you?</div>
      </div>
      <div className="mt-5 flex flex-col gap-y-2 w-full">
        {users.map((u) => {
          return (
            <div className="flex w-full gap-x-2 items-center">
              <div>
                <Avatar rounded size="sm" />
              </div>
              <div>
                <div className="font-stretch-150% text-sm">{u.name}</div>
                <div className="text-slate-500 text-xs">@{u.id}</div>
              </div>
              <Button className="ml-auto" size="sm">
                Share
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Followers;
