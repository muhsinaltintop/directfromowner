import Link from "next/link";
import React from "react";
import { getSlide } from "../_utils/GlobalApi";

const Slide = async () => {
  const data = await getSlide();
  return (
    <div>
      {data.map((item, index) => {
        return (
          <section
            key={index}
            className={`relative bg-[url(https://panel.theglobalproperty.co.uk${item?.attributes?.sliderImage?.data?.attributes?.url})] bg-cover bg-center bg-no-repeat`}
          >
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 "></div>

            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
              <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
                <h1 className="text-3xl font-extrabold sm:text-5xl text-gray-900 sm:text-white">
                  {item?.attributes?.sliderHeader}
                </h1>

                <p className="mt-4 max-w-lg sm:text-xl/relaxed text-gray-900 sm:text-white">
                  {item?.attributes?.sliderDescription}
                </p>

                <div className="mt-8 flex flex-wrap gap-4 text-center">
                  <Link
                    href="#"
                    className="block w-full rounded bg-fifth px-12 py-3 text-sm font-medium text-primary shadow hover:bg-primary hover:text-fifth ocus:outline-none focus:ring active:bg-third active:text-fifth sm:w-auto"
                  >
                    {item?.attributes?.sliderButtonFirst}
                  </Link>

                  <Link
                    href="#"
                    className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-fifth shadow hover:bg-fifth hover:text-primary ocus:outline-none focus:ring active:bg-third active:text-fifth sm:w-auto"
                  >
                    {item?.attributes?.sliderButtonSecond}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Slide;
