import React from "react";
import Properties from "../_components/Properties";
import { getProperty } from "../_utils/GlobalApi";

const page = async () => {
  const data = await getProperty();

  return (
    <div>
      <Properties propertyData={data} />
    </div>
  );
};

export default page;
