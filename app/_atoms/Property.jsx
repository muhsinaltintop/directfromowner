import Image from "next/image";
import Link from "next/link";
import React from "react";

const Property = ({ data }) => {
  return (
    <Link
      href="/properties/property-mainroad"
      className="group relative block overflow-hidden"
    >
      {data?.map((item) => {
        return (
          <div key={item?.id}>
            <Image
              src={`https://panel.theglobalproperty.co.uk${item?.attributes?.mainImage?.data?.attributes?.url}`}
              alt="alt"
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              height="350"
              width="450"
            />
            <div className="relative border border-gray-100 bg-white p-6">
              <span className="whitespace-nowrap bg-fifth px-3 py-1.5 text-xs font-medium text-primary">
                {item?.attributes?.isItReady
                  ? "Ready"
                  : item?.attributes?.willBeReadyOn}
              </span>
              <span className="whitespace-nowrap bg-primary px-3 py-1.5 text-xs font-medium text-fifth ml-4">
                {item?.attributes?.city}
              </span>

              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {item?.attributes?.address}
              </h3>

              <p className="mt-1.5 text-sm text-gray-700">
                £{item?.attributes?.price}
              </p>

              <form className="mt-4">
                <button className="block w-full rounded bg-fifth p-4 text-sm font-medium transition hover:scale-105 text-primary">
                  Details
                </button>
              </form>
            </div>
          </div>
        );
      })}
    </Link>
  );
};

export default Property;
