import Image from "next/image";
import React from "react";
import img from "../../../public/images/image.jpg";

const Subscribe = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
        <div className="flex flex-col md:flex-row rounded-l-xl">
          <Image
            src={img}
            className="object-fit rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none transform-hover:scale-150 hover:rounded-xl duration-200"
          />
          <div className="p-6 md:p-12">
            <h2 className="font-serif text-xl font-medium text-center text-white md:text-left">
              Get diet and fitness tips in your inbox
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
