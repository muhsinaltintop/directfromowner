import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat">
      <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-center ">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Special Investment Projects
          </h2>

          <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
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
      </div>
    </section>
  );
};

export default Banner;
