import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="overflow-hidden bg-[url(/banner.png)] bg-cover bg-center bg-no-repeat">
      <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24 text-center">
        
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Special Investment Projects
          </h2>

          <p className="hidden max-w-lg mx-auto text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed text-center">
            Be patient with investments; let’s wait for the right time. Let’s
            follow real estate auctions, purchase old buildings, renovate them,
            and secure our investment return by leasing them out for the long
            term.
          </p>

          <div className="mt-4 sm:mt-8">
            <Link
              href="#"
              className="inline-block rounded bg-fifth px-12 py-3 text-sm font-medium text-primary transition hover:bg-primary hover:text-fifth focus:outline-none focus:ring focus:ring-secondary"
            >
              Get Yours Today
            </Link>
          </div>
        
      </div>
    </section>
  );
};

export default Banner;
