import Image from "next/image";
import Link from "next/link";
import React from "react";

const Service = ({ title, detail }) => {
  return (
    <Link href="#" className="group relative block">
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

      <div className="absolute inset-0 flex flex-col items-start justify-end">
        <div className="bg-fifth p-6">
          <h3 className="text-xl font-medium text-primary">{title}</h3>

          <p className="mt-1.5 text-pretty text-xs text-primary">{detail}</p>

          <span className="mt-3 inline-block bg-primary  text-xs font-medium uppercase tracking-wide text-fifth p-3">
            Details
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Service;
