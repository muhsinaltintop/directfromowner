import Service from "../_atoms/Service"; // Service
import mainServices from "../../public/_mocks/main_services_eng"; // JSON dosyanızın yolu ve adı

const Services = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-2 py-4 sm:px-6 sm:py-6 lg:px-4">
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mainServices?.map((item, index) => (
            <li key={index}>
              <Service title={item.title} detail={item.detail} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
