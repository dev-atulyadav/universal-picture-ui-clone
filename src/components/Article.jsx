import React, { useContext } from "react";
import ImageContext from "../contexts/ImageContext";
ImageContext;
export default function Article() {
  const { thumbnails } = useContext(ImageContext);
  return (
    <article className="bg-[#1f1f1f] h-ful w-[25%] overflow-scroll">
      {thumbnails.map((value, index) => (
        <main className="flex flex-col hover:bg-black" key={index}>
          <div className="flex p-4 h-24 gap-4 text-white border-b-[1px] border-[#414141]">
            <img src={value.img} className="h-12" alt="" />
            <div>
              <h3 className="text-blue-600 font-bold capitalize">
                {value.title}
              </h3>
              <p className="uppercase text-[10px]">{value.desc}</p>
            </div>
            <img src="" alt="" />
          </div>
        </main>
      ))}
    </article>
  );
}
