import Breadcrumb from "@/app/_atoms/Breadcrumb";
import SingleProperty from "@/app/_components/SingleProperty";

const page = ({ params }) => {
  const link = params.property;
  return (
    <div className="">
      <Breadcrumb property={params.property} />
      <SingleProperty title={params.property} link={link} />
    </div>
  );
};

export default page;
