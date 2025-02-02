import React from "react";

function Settings() {
  const tabs = [
    "Login & Security",
    "Notifications",
    "Payment and Payout",
    "Terms & Policies",
  ];
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-1/4 text-xl p-3 font-semibold border border-black h-full">
        <div className="px-4 p-2 bg-slate-200 text-slate-700 w-fit rounded-full">
          My Profile
        </div>
        <div className="flex my-4 flex-col gap-y-2">
        {tabs.map((tab) => (
          <div className="hover:text-black w-fit h-14 text-gray-400 p-3 px-4 transition-all duration-200 ease-in hover:border-b">
            {tab}
          </div>
        ))}
        </div>
      </div>
      <div className="w-2/3 border border-black h-full"></div>
    </div>
  );
}

export default Settings;
