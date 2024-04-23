import React from "react";

const Transitions = () => {
  return (
    <>
      <div className="flex justify-evenly align-middle p-5 m-5">
        <button className="px-3 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-black transition duration-1000">
          Submit
        </button>
        <button className="px-3 py-2 text-sm text-white bg-blue-500 rounded-lg hover:opacity-20 transition duration-1000">
          Submit
        </button>
      </div>
      <div className="flex justify-evenly align-middle p-5 m-5">
        <button className="px-3 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-black transition duration-1000">
          Submit
        </button>
        <button className="px-3 py-2 text-sm text-white bg-blue-500 rounded-lg hover:scale-150 duration-500">
          Submit
        </button>
      </div>
    </>
  );
};

export default Transitions;
