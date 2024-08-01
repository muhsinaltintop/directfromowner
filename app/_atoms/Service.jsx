import Image from "next/image";
import Link from "next/link";
import React from "react";

const Service = ({ title, detail, imageUrl }) => {
  let servicePath = title
    .toLowerCase() // Convert the entire string to lowercase
    .split(" ") // Split the string by spaces into an array of words
    .map((word, index) => {
      if (index === 0) {
        // First word should remain in lowercase
        return word;
      } else {
        // Capitalize the first letter of each subsequent word
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    })
    .join("");
  return (
    <Link
      href={`/our-services/#${servicePath}`}
      className="group relative block"
    >
      <div className="relative h-[350px] sm:h-[450px]">
        <Image
          src={`https://panel.theglobalproperty.co.uk${imageUrl}`}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
          width="200"
          height="200"
        />

        <Image
          src={`/${servicePath}.png`}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 inset-y-0"
          width="200"
          height="200"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-start justify-end">
  <div className="bg-fifth p-3 min-h-44 flex flex-col items-start justify-end">

    <h3 className="text-xl font-medium text-primary">{title}</h3>

    <p className="mt-1 text-pretty text-sm text-primary">{detail}</p>

    <span className="mt-3 inline-block bg-primary text-xs font-medium uppercase tracking-wide text-fifth p-3">
      Details
    </span>

  </div>
</div>

    </Link>
  );
};

export default Service;
