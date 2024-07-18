import Link from "next/link";
import React from "react";

const Slide = ({ slide }) => {
  const {
    sliderHeader,
    sliderDescription,
    sliderButtonFirst,
    sliderButtonSecond,
    sliderImage,
  } = slide?.attributes;

  return (
    <section
      key={slide?.id}
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(https://panel.theglobalproperty.co.uk${sliderImage?.data?.attributes?.url})`,
      }}
    >
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 "></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-gray-900 sm:text-white">
            {sliderHeader}
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-gray-900 sm:text-white">
            {sliderDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              href="/properties"
              className="block w-full rounded bg-fifth px-12 py-3 text-sm font-medium text-primary shadow hover:bg-primary hover:text-fifth focus:outline-none focus:ring active:bg-third active:text-fifth sm:w-auto"
            >
              {sliderButtonFirst}
            </Link>

            <Link
              href="/our-services"
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-fifth shadow hover:bg-fifth hover:text-primary focus:outline-none focus:ring active:bg-third active:text-fifth sm:w-auto"
            >
              {sliderButtonSecond}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide;
