import React, { useContext } from "react";
import ImageContext from "../contexts/ImageContext";
import Article from "./Article";

export default function Section() {
  const { Main_banner } = useContext(ImageContext);
  return (
    <section className="bg-black h-[29rem] relative flex">
      <img src={Main_banner} className="h-full w-[75%] absolute" alt="" />
      <main className="h-full flex w-3/4 p-4 items-end justify-between text-blue-400">
        <button className="flex justify-center items-center bg-white p-6 rounded-full relative">
          <i class="fa-solid fa-arrow-left absolute bg-[#0000001c] p-3 rounded-full"></i>
        </button>
        <button className="flex justify-between items-center gap-4 bg-white w-56 pl-10 p-2 relative h-11 rounded-full uppercase font-semibold text-sm">
          <p>About The film</p>
          <i class="fa-solid fa-arrow-right absolute right-1 bg-[#0000001c] p-3 rounded-full"></i>
        </button>
        <button className="flex justify-between items-center gap-4 bg-blue-500 text-white w-48 pl-10 p-2 relative h-11 rounded-full uppercase font-semibold text-sm ">
          <p>Get Tickets</p>
          <i class="fa-solid fa-arrow-right absolute right-1 bg-[#0000001c] p-3 rounded-full"></i>
        </button>
        <button className="flex justify-between items-center gap-4 bg-white w-56 pl-10 p-2 relative h-11 rounded-full uppercase font-semibold text-sm ">
          <p>Watch the Trailer</p>
          <i class="fa-solid fa-arrow-right absolute right-1 bg-[#0000001c] p-3 rounded-full"></i>
        </button>
        <button className="flex justify-center items-center bg-white p-6 rounded-full relative">
          <i className="fa-solid fa-arrow-right absolute bg-[#0000001c] p-3 rounded-full"></i>
        </button>
      </main>
      <Article />
    </section>
  );
}
