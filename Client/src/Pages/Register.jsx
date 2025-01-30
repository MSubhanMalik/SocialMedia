import React from "react";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import BaseInput from "../Components/base/BaseInput";
import { Button } from "flowbite-react";

function Register() {
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
            <span className="font-bold text-2xl my-5 self-center">Sign Up</span>
            <div className="flex gap-y-2 flex-col">
              <div className="flex gap-x-2">
                <BaseInput placeholder="First Name" />
                <BaseInput placeholder="Last Name" />
              </div>
              <BaseInput placeholder="Username" />
              <div className="flex gap-x-2">
                <BaseInput placeholder="Password" />
                <BaseInput placeholder="Confirm Password" />
              </div>
            </div>
            <div className="flex mt-5 justify-center items-center gap-x-2">
              <a>Already have an account? Login</a>
              <Button size="sm">Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
