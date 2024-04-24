import React from "react";

const Grid = () => {
  return (
    <div className="grid grid-cols-1 p-5 gap-4 md:grid-cols-4 md:justify-center">
      <div className="p-10 border border-blue-500 bg-blue-200">Status 1</div>
      <div className="p-10 border border-blue-500 bg-blue-200">Status 1</div>
      <div className="p-10 border border-blue-500 bg-blue-200">Status 1</div>
      <div className="p-10 border border-blue-500 bg-blue-200">Status 1</div>
      <div className="md:col-span-3 md:row-span-5 md:h-72 p-10 border border-blue-500 bg-blue-200">
        Graph
      </div>
      <div className="row-auto p-10 border border-blue-500 bg-blue-200 md:row-span-5">Recent 1</div>
      <div className="p-10 border border-blue-500 bg-blue-200">Recent 2</div>
      <div className="p-10 border border-blue-500 bg-blue-200">Recent 3</div>
      <div className="md:col-span-2 md:h-60 p-10 border border-blue-500 bg-blue-200">
        Recent 7
      </div>
    </div>
  );
};

export default Grid;
