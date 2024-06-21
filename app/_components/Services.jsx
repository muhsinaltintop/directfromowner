import React from "react";
import Service from "../_atoms/Service";

const Services = () => {
  return (
    <div className="flex justify-around">
      <div className="w-2/12">
        <Service
          title="Property Management"
          detail="Maximise your rental income with our expert property management services."
        />
      </div>
      <div className="w-2/12">
        <Service
          title="Sales Services"
          detail="Find your dream property with our dedicated sales team."
        />
      </div>
      <div className="w-2/12">
        <Service
          title="Consultancy Services"
          detail="Make profitable investment decisions with our expert consultancy services."
        />
      </div>
      <div className="w-2/12">
        <Service
          title="Renovation Projects"
          detail="Transform properties into valuable assets with our renovation expertise."
        />
      </div>
    </div>
  );
};

export default Services;
