import React from "react";

const Colors = () => {
  return (
    <div className="flex align-center flex-col max-w-max mx-auto mt-6 border rounded shadow-lg p-5">
      <p className="text-black text-xl p-2">Tailwind is Awesome</p>
      <p className="text-red-500 text-xl p-2">Tailwind is Awesome</p>
      <p className="bg-red-500 text-xl p-2">Tailwind is Awesome</p>
      <p className="bg-slate-500 text-xl p-2 text-cyan-50">Tailwind</p>
      <p className="underline decoration-slate-500 text-xl p-2">Tailwind</p>
      <p className="underline decoration-slate-500 text-xl p-2 border border-cyan-100 border-y-2">
        Tailwind
      </p>
      <div className="divide-y divide-blue-300 divide-x">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
      </div>
      <button className="outline outline-blue-300 mt-5">Hello</button>
      <div className="shadow-lg bg-cyan-300 shadow-cyan-200 mt-5">
        Subscribe
      </div>
      <input type="checkbox" className="accent-purple-500 mt-5 h-5" />
      <input type="checkbox" className="accent-cyan-300 mt-5 h-5" />
      <input type="text" className="bg-[#ab4242] mt-5 h-5" />
    </div>
  );
};

export default Colors;
