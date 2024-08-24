import React from "react";
import Properties from "./Properties";
import { getProperty } from "../_utils/GlobalApi";

const PropertiesContainer = async () => {
  // Fetch data in the server component
  const data = await getProperty();

  // Pass the data as props to the client component
  return <Properties initialData={data} />;
};

export default PropertiesContainer;
