import Link from "next/link";
import React from "react";

const Slider = () => {
  return (
    <section className="relative bg-[url(https://images.unsplash.com/photo-1629677641509-9e726c20e357?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 "></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
            Your Trusted Expert in
            <strong className="block font-extrabold text-white">
              Property Investment
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
            With our investment consultancy services, we guide you to acquire
            your dream property under the best conditions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              href="#"
              className="block w-full rounded bg-fifth px-12 py-3 text-sm font-medium text-primary shadow hover:bg-primary hover:text-fifth ocus:outline-none focus:ring active:bg-third active:text-fifth sm:w-auto"
            >
              Get Started
            </Link>

            <Link
              href="#"
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-fifth shadow hover:bg-fifth hover:text-primary ocus:outline-none focus:ring active:bg-third active:text-fifth sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
