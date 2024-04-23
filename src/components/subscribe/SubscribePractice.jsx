import React from "react";
import Image from "next/image";
import img from "../../../public/images/image.jpg";

const SubscribePractice = () => {
  return (
    <div className="flex flex-col justify-center align-middle mx-auto bg-slate-800 text-white rounded-xl md:flex-row md:max-w-fit">
      <Image
        src={img}
        alt=""
        className=" h-56 bg-cover size-auto p-2 rounded-xl md:bg-cover"
      />
      <div className="flex flex-col justify-center align-middle mx-10">
        <h1 className="text-lg">Get Diet and Fitness tips in your inbox</h1>
        <p className="pt-5 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          impedit.
        </p>
        <div className="flex flex-col justify-start align-middle pt-5 pb-8 w-full md:flex-row ">
          <input
            className="border border-slate-700 text-sm rounded-lg text-slate-600 bg-gray-800 px-3 py-2 text-center md:h-10"
            placeholder="Enter your email address"
          />
          <button className="bg-green-400 mt-4 text-sm text-black rounded-lg px-4 py-2 md:ml-3 md:mt-0">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribePractice;
