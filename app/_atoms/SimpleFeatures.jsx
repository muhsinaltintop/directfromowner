"use client";
import React, { useState, useRef } from "react";
import { FaShareAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaBath } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import { MdDeviceThermostat } from "react-icons/md";
import { GiHouse } from "react-icons/gi";
import ModalComponent from "./ModalComponent";

const SimpleFeatures = ({ link, data }) => {
  const [open, setOpen] = useState(false);
  const shareButtonRef = useRef(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="w-9/12 mx-auto mt-4 rounded-lg border bg-primary text-fifth">
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 "
          >
            <div className="">
              <h2 className="text-xl font-bold  ">Project Features</h2>
            </div>
            <div>
              <div className="flex justify-between mt-4 text-cyan-950">
                <div>
                  <h1>{item.attributes.address}</h1>
                </div>
                <div className="flex">
                  <button
                    ref={shareButtonRef}
                    onClick={() => {
                      open ? handleClose() : handleOpen();
                    }}
                    className="relative  border-none cursor-pointer flex group"
                    title="Share this property"
                  >
                    <ModalComponent
                      handleOpen={handleOpen}
                      handleClose={handleClose}
                      open={open}
                      shareButtonRef={shareButtonRef}
                      link={link}
                    />
                    <FaShareAlt size={28} className="text-fifth" />
                  </button>
                </div>
              </div>
              <div className="flex justify-between mt-4 text-cyan-950">
                <div>
                  <h3>
                    <span key={item.id} className="font-bold">
                      £ {item.attributes.price}
                    </span>
                  </h3>
                </div>
                <div>
                  <h3>Added on 25/06/2024</h3>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-fifth text-primary p-4">
                  <GiHouse size={23} color="white" />
                </span>

                <div>
                  <h2 className="text-lg font-bold">Property Type</h2>

                  <p className="mt-1 text-sm text-black">
                    {item.attributes.propertyType}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-fifth text-primary p-4">
                  <FaRegCalendarAlt size={23} color="white" />
                </span>

                <div>
                  <h2 className="text-lg font-bold">Constrution Year</h2>

                  <p className="mt-1 text-sm text-black">
                    {item.attributes.constructionYear}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-fifth text-primary p-4">
                  <MdDeviceThermostat size={23} color="white" />
                </span>

                <div>
                  <h2 className="text-lg font-bold">Heating</h2>

                  <p className="mt-1 text-sm text-black">
                    {item.attributes.heatingType}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-fifth text-primary p-4">
                  <FaBed size={23} color="white" />
                </span>

                <div>
                  <h2 className="text-lg font-bold">Number of Bedroom</h2>

                  <p className="mt-1 text-sm text-black">
                    {item.attributes.numberOfBedroom}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-fifth text-primary p-4">
                  <FaBath size={23} color="white" />
                </span>

                <div>
                  <h2 className="text-lg font-bold">Number of Bathroom</h2>

                  <p className="mt-1 text-sm text-black">
                    {item.attributes.numberOfBathroom}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-fifth text-primary p-4">
                  <GiHomeGarage size={23} color="white" />
                </span>

                <div>
                  <h2 className="text-lg font-bold">Garage</h2>

                  <p className="mt-1 text-sm text-black">
                    {item.attributes.numberOfGarage}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default SimpleFeatures;
