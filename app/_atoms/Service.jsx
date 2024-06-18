import Image from "next/image";
import React from "react";

const Service = ({ title }) => {
  return (
    <a href="#" className="group relative block">
      <div className="relative h-[350px] sm:h-[450px]">
        <Image
          src="/house.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
          width="200"
          height="200"
        />

        <Image
          src="/house.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
          width="200"
          height="200"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
        <h3 className="text-xl font-medium text-white">{title}</h3>

        <p className="mt-1.5 text-pretty text-xs text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          sequi dicta impedit aperiam ipsum!
        </p>

        <span className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
          Shop Now
        </span>
      </div>
    </a>
  );
};

export default Service;
