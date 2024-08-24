import Breadcrumb from "../../_atoms/Breadcrumb";
import SingleProperty from "../../_components/SingleProperty"
import { getSingleProperty } from "../../_utils/GlobalApi";

const page = async ({ params }) => {
  const id = params.propertyId;
  const data = await getSingleProperty(id);
  const propertyName = data?.attributes?.propertyName;
  
  return (
    <div className="">
      <Breadcrumb propertyName={propertyName} />
      <SingleProperty id={id} data={data} />
    </div>
  );
};

export default page;
