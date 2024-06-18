import React from "react";
import Service from "../_atoms/Service";

const Services = () => {
  return (
    <div className="flex justify-around">
      <div className="w-3/12">
        <Service title="Property Management" />
      </div>
      <div className="w-3/12">
        <Service title="Sales Services" />
      </div>
      <div className="w-3/12">
        <Service title="Consultancy Services" />
      </div>
    </div>
  );
};

export default Services;
