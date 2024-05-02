import React from "react";
import CardComp from "./CardComp";

const Card = () => {
  return (
    <div className="bg-slate-900 min-h-screen flex justify-center">
      <div className="flex flex-col md:flex-row my-6 justify-between items-center ">
        <CardComp
          heading="BASIC"
          monthlyPlan="$1.99/month"
          storageNumber="100"
          storageSize="GB"
        />
        <CardComp
          heading="STANDARD"
          monthlyPlan="$3.99/month"
          storageNumber="200"
          storageSize="GB"
          borderStyle="border-indigo-700"
        />
        <CardComp
          heading="PREMIUM"
          monthlyPlan="$8.99/month"
          storageNumber="2"
          storageSize="TB"
        />
      </div>
    </div>
  );
};

export default Card;
