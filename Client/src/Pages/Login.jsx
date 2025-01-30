import React from "react";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import BaseInput from "../Components/base/BaseInput";
import { Button } from "flowbite-react";

function Login() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full h-auto flex">
        <div className="w-1/2 flex gap-x-4 justify-end self-center">
          <HiOutlineEmojiHappy color="green" size={60} />
          <div className="flex flex-col gap-y-5">
            <span className="text-4xl font-bold text-green-700 " color="green">
              Salaam
            </span>
            <span className="font-semibold">
              Explore the ideas throughout the world
            </span>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="w-2/3 h-auto shadow-lg rounded-xl p-4 flex flex-col border border-slate-200 ">
            <span className="font-bold text-2xl my-5 self-center">Log in</span>
            <div className="flex gap-y-2 flex-col">
              <label>Username:</label>
              <BaseInput placeholder="Enter your username" />
              <label>Password:</label>
              <BaseInput placeholder="12345678" />
            </div>
            <div className="flex mt-5">
                <a className="">Don't have an account?</a>
                <Button className="ml-auto" size="sm">Log In</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
