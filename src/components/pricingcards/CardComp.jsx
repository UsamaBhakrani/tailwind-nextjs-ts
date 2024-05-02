import React from "react";

const CardComp = ({ heading, monthlyPlan, storageNumber, storageSize }) => {
  return (
    <div className="flex flex-col justify-evenly items-center border-8 border-slate-600 h-80 px-8 rounded-2xl m-5">
      <h1 className="text-white text-sm">{heading}</h1>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl">
          <span className="text-white text-2xl">{storageNumber}</span>
          {storageSize}
        </h1>
        <span className="text-white text-xs">{monthlyPlan}</span>
        <button className="mt-3 px-8 py-2 rounded-lg text-white flex justify-center items-center border border-indigo-500 hover:bg-indigo-700">
          Purchase
        </button>
      </div>
      <div className="text-white mt-4 border-t-2 border-slate-500">
        <ul className="text-xs mt-4">
          <li className="py-1">
            {storageNumber} {storageSize} storage
          </li>
          <li className="py-1">Option to add members</li>
          <li className="py-1">Extra member benefits</li>
        </ul>
      </div>
    </div>
  );
};

export default CardComp;
