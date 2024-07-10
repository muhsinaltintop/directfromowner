import Breadcrumb from "@/app/_atoms/Breadcrumb";
import SingleProperty from "@/app/_components/SingleProperty";
import { getProperty } from "@/app/_utils/GlobalApi";

const page = ({ params }) => {
  const link = params.property;

  return (
    <div className="">
      <Breadcrumb property={link} />
      <SingleProperty title={params.property} link={link} />
    </div>
  );
};

export default page;
