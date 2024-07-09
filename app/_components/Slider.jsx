import React from "react";
import Slide from "../_atoms/Slide";
import { getSlide } from "../_utils/GlobalApi";

const Slider = async () => {
  const slides = await getSlide();
  return (
    <div>
      {slides.map((slide, index) => (
        <Slide key={slide.id} slide={slide} />
      ))}
    </div>
  );
};

export default Slider;
