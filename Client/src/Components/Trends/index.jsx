import React from "react";

function Trends() {
  const trends = [
    {
      text: "#minions",
      shares: 50000,
    },
    {
      text: "#elonmusk",
      shares: 720000,
    },
    {
      text: "#subhan",
      shares: 1002312,
    },
    {
      text: "#fastNu",
      shares: 1231231,
    },
    {
      text: "#idk",
      shares: 1900,
    },
    {
      text: "#github",
      shares: 1231231,
    },
  ];
  return (
    <div className="w-full h-2/3 flex flex-col gap-y-4 shadow-lg p-5 rounded-lg">
      <div className="font-semibold text-xl">Trends for you</div>
      <div className="flex flex-col gap-y-2">
        {trends.map((trend) => {
          return (
            <div>
              <div className="font-semibold text-gray-800">{trend.text}</div>
              <div className="text-slate-500 text-xs">
                {trend.shares / 1000}k shares{" "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Trends;
