import Breadcrumb from "@/app/_atoms/Breadcrumb";
import SingleProperty from "@/app/_components/SingleProperty";

const page = ({ params }) => {
  return (
    <div className="">
      <Breadcrumb property={params.property} />
      <SingleProperty title={params.property} />
    </div>
  );
};

export default page;
