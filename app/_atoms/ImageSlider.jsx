"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

const ImageSlider = ({ propertyImage }) => {
  const [currentImage, setCurrentImage] = useState(
    `https://panel.theglobalproperty.co.uk${propertyImage?.data[0]?.attributes?.url}`
  );

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="mb-4">
        <Image
          src={currentImage}
          alt="current"
          className="w-full max-w-xl rounded-lg"
          width="500"
          height="500"
        />
      </div>
      <div className="flex space-x-2">
        {propertyImage?.data?.map((img) => (
          <div
            key={img?.id}
            className={`cursor-pointer border-2 ${
              currentImage ===
              `https://panel.theglobalproperty.co.uk${img?.attributes?.url}`
                ? "border-blue-500"
                : "border-transparent"
            } transition duration-300`}
            onClick={() =>
              setCurrentImage(
                `https://panel.theglobalproperty.co.uk${img?.attributes?.url}`
              )
            }
          >
            <Image
              src={`https://panel.theglobalproperty.co.uk${img?.attributes?.url}`}
              alt={`thumbnail-${img?.id}`}
              className="w-24 h-24 object-cover rounded-lg"
              width="500"
              height="500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
