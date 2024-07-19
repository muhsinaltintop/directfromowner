import Breadcrumb from "@/app/_atoms/Breadcrumb";
import SingleProperty from "@/app/_components/SingleProperty";
import { getSingleProperty } from "@/app/_utils/GlobalApi";

const page = async ({ params }) => {
  const id = params.propertyId;
  const data = await getSingleProperty(id);
  const propertyName = data?.attributes?.propertyName;

  console.log(propertyName);
  
  return (
    <div className="">
      <Breadcrumb propertyName={propertyName} />
      <SingleProperty id={id} data={data} />
    </div>
  );
};

export default page;
