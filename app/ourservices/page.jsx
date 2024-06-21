import React from "react";
import servicesData from "../../public/_mocks/services.json";

const Page = () => {
  return (
    <section className="bg-fifth text-primary">
      <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {servicesData?.services?.map((service, index) => (
          <div key={index} className="mt-8">
            <h3 className="text-2xl font-bold sm:text-3xl">{service.title}</h3>
            <p className="mt-4 text-gray-300">{service.spot}</p>
            <p className="mt-8 text-gray-300">{service.opening}</p>

            <div className="grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
              {service.services.map((subService, subIndex) => (
                <div key={subIndex} className="flex items-start gap-4">
                  <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      ></path>
                    </svg>
                  </span>

                  <div>
                    <h2 className="text-lg font-bold">{subService.subtitle}</h2>
                    <p className="mt-1 text-sm text-gray-300">
                      {subService.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {service.benefits && service.benefits.length > 0 && (
              <>
                <p className="mt-8 text-gray-300">Benefits:</p>
                <div className="grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                  {service.benefits.map((benefit, benIndex) => (
                    <div key={benIndex} className="flex items-start gap-4">
                      <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                          ></path>
                        </svg>
                      </span>

                      <div>
                        <h2 className="text-lg font-bold">
                          {benefit.subtitle}
                        </h2>
                        <p className="mt-1 text-sm text-gray-300">
                          {benefit.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            <p className="mt-8 text-gray-300">{service.closing}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
