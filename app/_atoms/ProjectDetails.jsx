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
            LAST PLOT REMAINING Absolutely outstanding Energy efficient homes.
            These wonderful semi detached homes offer amazing space and spacious
            south facing gardens whilst being constructed to offer A rated
            energy certificates which some lenders will offer discounted
            interest rates on. Highlights include four first floor bedrooms,
            en-suite to master, family bathroom. Downstairs there is an entrance
            hall, cloakroom, living room, kitchen/diner and utility room.
            Outside the generous gardens and two parking spaces, call for
            further details.
          </p>
          <ul className="space-y-4 mt-4  ">
            <li>
              <h1 className="font-bold text-2xl">Ground Floor</h1>
            </li>
            <li>
              <h2 className="font-bold text-xl">Details 1</h2>
            </li>
            <li>Entrance Hall</li>
            <li>With stairs to first floor and doors to.</li>
            <li>Ground Floor WC</li>
            <li>Close coupled WC and wash hand basin.</li>
            <li>Living Room</li>
            <li>
              12&apos; 10&quot; x 12&apos; 5&quot; (3.91m x 3.78m) Window to
              front, radiator, fitted storage cupboard.
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
