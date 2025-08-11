import { MdOutlineArrowOutward } from "react-icons/md";
import { workItems } from "../data/index";
import Image from "next/image";
import React, { memo } from "react";

const WorkItem = memo(function WorkItem({ item }: { item: typeof workItems[0] }) {
  return (
    <div key={item.id} className="flex md:flex-row flex-col justify-evenly w-full py-20 border-b-2 group">
      <div className="flex flex-col p-6 gap-2 justify-between">
        <div className="mb-12">
          <h2 className="text-4xl font-semibold pb-3">{item.title}</h2>
          <p className="pb-12">{item.description}</p>
          <div className="grid">
            <div className="flex gap-10 pb-4 border-b mb-4 w-full md:max-w-[50%]">
              <span className="w-[50%]">Category:</span>
              <span className="w-[50%]">{item.category}</span>
            </div>
            <div className="flex gap-10 pb-4 border-b mb-4 w-full md:max-w-[50%]">
              <span className="w-[50%]">Tag:</span>
              <span className="w-[50%]">{item.tag}</span>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="flex items-end gap-4 group/button">
          <span className="text-xl ">Project Details</span> <MdOutlineArrowOutward className="text-3xl group-hover/button:rotate-45 group-hover/button:translate-x-5 duration-500" />
        </button>
      </div>
      <div className="flex flex-col">
        <div className="w-[100vw] md:w-[80vh] h-[50vh] overflow-hidden rounded-3xl relative bg-black">
          <Image
            src={item.img}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 duration-300"
            loading="lazy"
            quality={75}
            placeholder="blur"
            blurDataURL={typeof item.img === 'string' && item.img.endsWith('.jpg') ? `/works/blur/${item.img.split('/').pop()?.replace('.jpg', '-blur.jpg')}` : undefined}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
});

export default function Works() {
  return (
    <section id="works" className="relative flex flex-col w-full min-h-screen bg-black py-20 px-6 lg:px-24">
      <h3 className="text-xl text-white z-50 pb-5">
        Our Works
      </h3>
      {workItems.map((item) => (
        <WorkItem key={item.id} item={item} />
      ))}
    </section>
  );
}
