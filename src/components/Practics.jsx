import React from "react";

const Practics = () => {
  return (
    <>
      <article>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorem
          incidunt corporis porro, inventore aliquid totam. Nobis vel, incidunt
          consequatur molestiae dolore ratione eveniet optio reiciendis maiores
          eius repudiandae? Obcaecati quis iure veniam praesentium, cupiditate
          id nisi harum expedita provident vel, rerum iusto itaque aliquid omnis
          quas distinctio illo facere.
        </p>
        <div className="bg-slate-200 m-2 flex justify-center">Hello World</div>
        <div className="bg-slate-200 mt-2 flex justify-center">Hello World</div>
        <div className="bg-slate-200 mb-2 flex justify-center">Hello World</div>
        <div className="bg-slate-200 mx-2 flex justify-center">Hello World</div>
        <div className="bg-slate-200 my-2 flex justify-center">Hello World</div>
        <div className="bg-slate-200 mt-[50px] flex justify-center">
          Hello World
        </div>

        <div className="bg-slate-200 p-2 flex justify-center">Hello World</div>
        <div className="bg-slate-200 pt-2 flex justify-center">Hello World</div>
        <div className="bg-slate-200 pb-2 flex justify-center">Hello World</div>
        <div className="bg-slate-200 px-2 flex justify-center">Hello World</div>
        <div className="bg-slate-200 py-2 flex justify-center">Hello World</div>
        <div className="bg-slate-200 pt-[50px] flex justify-center">
          Hello World
        </div>
        <div className="flex mt-24 space-x-24">
          <div>item 1</div>
          <div>item 2</div>
          <div>item 3</div>
          <div>item 4</div>
          <div>item 5</div>
          <div>item 6</div>
          <div>item 7</div>
        </div>
        <div className="flex flex-col mt-24 space-y-24">
          <div>item 1</div>
          <div>item 2</div>
          <div>item 3</div>
          <div>item 4</div>
          <div>item 5</div>
          <div>item 6</div>
          <div>item 7</div>
        </div>
        <div className="font-sans">Tailwind is Awesome</div>
        <div className="font-serif">Tailwind is Awesome</div>
        <div className="font-mono">Tailwind is Awesome</div>
        <div className="font-sans">Tailwind is Awesome</div>
        <div className="font-sans text-xs">Tailwind is Awesome</div>
        <div className="font-serif text-xl">Tailwind is Awesome</div>
        <div className="font-mono text-2xl">Tailwind is Awesome</div>
        <div className="font-sans text-9xl">Tailwind is Awesome</div>
        <div className="tracking-tight">Tailwind is Awesome</div>
        <div className="tracking-widest">Tailwind is Awesome</div>
        <div className="text-left">Tailwind is Awesome</div>
        <div className="text-right">Tailwind is Awesome</div>
        <div className="text-center">Tailwind is Awesome</div>
        <div className="underline decoration-4">Tailwind</div>
        <p className="uppercase">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ducimus
          culpa a necessitatibus quam fugit. Enim consequatur est consequuntur
          quas, ducimus nihil animi aut quidem quia debitis natus! Et numquam
          placeat fugiat recusandae, corrupti molestiae rerum magnam nostrum,
          neque aut accusamus vitae nulla voluptatum omnis, voluptatem amet
          consequuntur illo quam!
        </p>
      </article>
      <div className="h-24 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      <div className="w-96 mt-6 ml-4 p-3 shadow-lg shadow-blue-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aperiam
        itaque harum unde quaerat soluta eligendi aliquid, temporibus, atque
        ducimus obcaecati modi? Odit vero beatae minus ea cum dicta consequuntur
        distinctio praesentium. Nihil delectus repellat consequatur repellendus
        illum atque, nisi obcaecati officia quos porro aspernatur minus sapiente
        qui libero esse.
      </div>
      <div className="w-96 border m-6 p-3 border-blue-300 shadow-lg shadow-cyan-300 rounded-lg hover:shadow-purple-500 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        accusantium doloribus explicabo autem ullam dolorum praesentium,
        similique obcaecati cumque nobis fugit, impedit velit mollitia nemo
        earum incidunt odio hic ea accusamus quas quibusdam. Ullam placeat rem
        dolorem deserunt debitis reiciendis cum, ipsam, magni aperiam quaerat
        error beatae quasi qui maiores.
      </div>
      <div className="m-10">
        <button className="bg-black text-white border hover:bg-teal-600 border-black py-2 px-5 rounded-lg">
          Submit
        </button>
        <button className="mx-4 border border-black hover:bg-red-600 active:bg-yellow-500 text-black py-2 px-5 rounded-lg">
          Cancel
        </button>
      </div>
    </>
  );
};

export default Practics;
