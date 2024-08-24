import React from "react";
import PropertiesContainer from "../_components/PropertiesContainer";
import { getProperty } from "../_utils/GlobalApi";

const page = async () => {
  const data = await getProperty();

  return (
    <div>
      <PropertiesContainer propertyData={data} />
    </div>
  );
};

export default page;
