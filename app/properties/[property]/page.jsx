import Breadcrumb from "@/app/_atoms/Breadcrumb";
import SingleProperty from "@/app/_components/SingleProperty";

const page = ({ params }) => {
  const link = params.property;
  const breadLink = decodeURIComponent(link)

  return (
    <div className="">
      <Breadcrumb property={breadLink} />
      <SingleProperty title={params.property} link={link} />
    </div>
  );
};

export default page;
