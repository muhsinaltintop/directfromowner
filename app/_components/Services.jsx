import Service from "../_atoms/Service"; // Service
import mainServices from "../../public/_mocks/main_services_eng"; // JSON dosyanızın yolu ve adı
import { getService } from "../_utils/GlobalApi";

const Services = async () => {
  const data = await getService();
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-2 py-4 sm:px-6 sm:py-6 lg:px-4">
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data?.map((item, index) => (  
            
            <li key={index}>
              <Service title={item?.attributes.serviceTitle} detail={item?.attributes.serviceDescription} imageUrl={item?.attributes?.serviceImage?.data?.attributes?.url}/>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
