import React from "react";

const ProjectDetails = () => {
  return (
    <article className="w-9/12 mx-auto mt-10 hover:animate-background rounded-xl bg-gradient-to-r from-fifth via-primary to-fifth p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
      <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Project Details</h2>

        <h3 className="mt-0.5 text-lg font-medium text-gray-900">
          Lorem Ipsum Project Description
        </h3>
        <p>
          Lorem Square, located between Lorem City Center and LoremMediaCity, is
          a stunning riverside residential project comprising 500 luxury
          apartments. The two residential buildings in the project are situated
          around a beautifully arranged square designed to promote wellness and
          an enriching living experience. Lorem Square stands out as an ideal,
          safe option for professionals, families, and first-time homebuyers.
        </p>
        <ul>
          <li>Luxury residential project with 500 apartments in Lorem City</li>
          <li>
            A luxurious project spread over 2.8 acres with direct river frontage
          </li>
          <li>
            Located equidistantly between Lorem City Center and
            LoremMediaCity/Salford Quays, in the citys most popular location
          </li>
          <li>
            The area in front of the project will undergo a billion-pound
            transformation process over the next decade
          </li>
          <li>
            A wide square with extensive gardens, various social spaces, and
            relaxation areas
          </li>
          <li>Private balconies and outdoor spaces for most apartments</li>
          <li>Hotel-style concierge, gym, co-working space, rooftop gardens</li>
        </ul>

        <div className="mt-4 flex flex-wrap gap-1">
          <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
            Snippet
          </span>

          <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
            JavaScript
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProjectDetails;
