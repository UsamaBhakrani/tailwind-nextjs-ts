import React from "react";
import CardComp from "./CardComp";

const Card = () => {
  return (
    <div className="bg-slate-900 h-screen flex justify-center">
      <div className="flex flex-col md:flex-row justify-between items-center ">
        <CardComp
          heading="BASIC"
          monthlyPlan="$1.99/month"
          storageNumber="100"
          storageSize="GB"
        />
        <CardComp />
      </div>
    </div>
  );
};

export default Card;
