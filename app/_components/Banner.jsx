import React from "react";

const Banner = () => {
  return (
    <section className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat">
      <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-center ">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Latest Properties
          </h2>

          <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            officia corporis quasi doloribus iure architecto quae voluptatum
            beatae excepturi dolores.
          </p>

          <div className="mt-4 sm:mt-8">
            <a
              href="#"
              className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Yours Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
