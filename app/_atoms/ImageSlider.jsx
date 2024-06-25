"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/house-1/main.png",
  "/house-1/1.png",
  "/house-1/2.png",
  "/house-1/3.png",
  "/house-1/4.png",
  "/house-1/5.png",
  "/house-1/6.png",
  "/house-1/7.png",
  "/house-1/8.png",
  "/house-1/9.png",
  "/house-1/10.png",
  "/house-1/11.png",
  "/house-1/12.png",
  "/house-1/13.png",
  "/house-1/14.png",
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className="flex flex-col items-center">
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
        {images.map((img, index) => (
          <div
            key={index}
            className={`cursor-pointer border-2 ${
              currentImage === img ? "border-blue-500" : "border-transparent"
            } transition duration-300`}
            onClick={() => setCurrentImage(img)}
          >
            <Image
              src={img}
              alt={`thumbnail-${index}`}
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
