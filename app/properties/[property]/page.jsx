import Breadcrumb from "@/app/_atoms/Breadcrumb";
import SingleProperty from "@/app/_components/SingleProperty";
import { getProperty } from "@/app/_utils/GlobalApi";

const page = async ({ params }) => {
  const link = params.property;
  const data = await getProperty();

  return (
    <div className="">
      {data?.map((item) => {
        return (
          <div key={item.id}>
            <Breadcrumb property={item.attributes.propertyName} />
            <SingleProperty title={params.property} link={link} data={data} />
          </div>
        );
      })}
    </div>
  );
};

export default page;
