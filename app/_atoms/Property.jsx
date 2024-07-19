import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBath, FaBed } from "react-icons/fa";

const Property = ({ data }) => {
  return (
    <Link
      href={`/properties/${data?.id}`}
      className="group relative block overflow-hidden"
    >

            <Image
              src={`https://panel.theglobalproperty.co.uk${data?.attributes?.mainImage?.data?.attributes?.url}`}
              alt="alt"
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              height="350"
              width="450"
            />
            <div className="relative border border-gray-100 bg-white p-6">
              <span className="whitespace-nowrap bg-fifth px-3 py-1.5 text-xs font-medium text-primary">
                {data?.attributes?.isItReady
                  ? "Ready"
                  : data?.attributes?.willBeReadyOn}
              </span>
              <span className="whitespace-nowrap bg-primary px-3 py-1.5 text-xs font-medium text-fifth ml-4">
               Location: {data?.attributes?.city}
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {data?.attributes?.address}
              </h3>

              <p className="mt-1.5 text-sm text-gray-700">
                £{data?.attributes?.price}
              </p>
             <div className="flex gap-2 mt-2">
              <div className="flex items-center gap-2">
                <span className="shrink-0 rounded-lg bg-fifth text-primary p-2">
                  <FaBed size={16} color="white" />
                </span>

                <div>
                  

                  <p className="mt-1 text-sm text-black">
                    {data?.attributes?.numberOfBedroom} Bedroom
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="shrink-0 rounded-lg bg-fifth text-primary p-2">
                  <FaBath size={16} color="white" />
                </span>

                <div>
                    <p className="mt-1 text-sm text-black">
                    {data?.attributes?.numberOfBathroom} Bathroom
                  </p>
                </div>
              </div>
              </div>
              

              <form className="mt-4">
                <button className="block w-full rounded bg-fifth p-4 text-sm font-medium transition hover:scale-105 text-primary">
                  Details
                </button>
              </form>
            </div>
    </Link>
  );
};

export default Property;
