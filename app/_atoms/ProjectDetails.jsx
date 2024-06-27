import React from "react";

const keyFeatures = [
  "A Rated EPC",
  "Four Bedrooms",
  "Off Road Parking",
  "Good Specification",
  "EV Charging Point",
  "New Build 10 Year Warranty",
  "Generous Garden",
  "En- Suite And Family Bathroom",
  "New Build Home",
  "Solar Panels",
];

const ProjectDetails = () => {
  return (
    <article className="w-9/12 mx-auto mt-10 border-2 border-gray-200 rounded-xl ">
      <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
        <h2 className="text-xl font-bold  text-fifth">Project Details</h2>

        <h3 className="my-4   text-lg font-bold">Key Features</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc pl-5">
          {keyFeatures.map((feature, index) => (
            <li key={index} className="text-gray-800">
              {feature}
            </li>
          ))}
        </ul>

        <div className="my-5 ">
          <h3 className="my-4   text-lg font-bold">Description</h3>
          <p>
            Lorem Square, located between Lorem City Center and LoremMediaCity,
            is a stunning riverside residential project comprising 500 luxury
            apartments. The two residential buildings in the project are
            situated around a beautifully arranged square designed to promote
            wellness and an enriching living experience. Lorem Square stands out
            as an ideal, safe option for professionals, families, and first-time
            homebuyers.
          </p>
          <ul className="space-y-4 mt-4  ">
            <li>
              Luxury residential project with 500 apartments in Lorem City
            </li>
            <li>
              A luxurious project spread over 2.8 acres with direct river
              frontage
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
            <li>
              Hotel-style concierge, gym, co-working space, rooftop gardens
            </li>
          </ul>
        </div>

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
