import servicesData from "../../public/_mocks/services.json";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa6";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { GiAutoRepair } from "react-icons/gi";
import { GiHouseKeys } from "react-icons/gi";
import { BsFillHouseGearFill } from "react-icons/bs";
import { FcInspection } from "react-icons/fc";
import { GoLaw } from "react-icons/go";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaHeadSideVirus } from "react-icons/fa6";
import { BsHouseExclamation } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { PiHeadsetFill } from "react-icons/pi";
import { ImExit } from "react-icons/im";
import { MdBedroomParent } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FiArrowDown } from "react-icons/fi";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineManageAccounts } from "react-icons/md";
const toCamelCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
};

const iconMapping = {
  "Market Analysis": BsGraphUpArrow,
  "Negotiation Support": FaRegHandshake,
  "Transaction Management": AiOutlineTransaction,
  "Tenant Relations": FaHouseChimneyUser,
  "Maintenance and Repairs": BsFillHouseGearFill,
  "Rent Collection": GiHouseKeys,
  "Property Inspections": FcInspection,
  "Legal Compliance": GoLaw,
  "Value Enhancement": FaHandHoldingDollar,
  "Investment Analysis": BsGraphUpArrow,
  "Strategic Planning": FaHeadSideVirus,
  "Risk Management": BsHouseExclamation,
  "Portfolio Management": VscGraph,
  "Acquisition Support": PiHeadsetFill,
  "Exit Strategies": ImExit,
  "Property Acquisition": FaRegHandshake,
  Renovation: BsFillHouseGearFill,
  "Airbnb Preparation": FaHouseChimneyUser,
  "Rental Management": GiHouseKeys,
  "Guaranteed Income": FaMoneyBillTrendUp,
  "Low-Cost Entry": FiArrowDown,
  "High Returns": GiReceiveMoney,
  "Professional Management": MdOutlineManageAccounts,
  "Guaranteed Income": FaMoneyBillTrendUp,
};

const Page = () => {
  return (
    <section className="bg-primary text-fifth">
      <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {servicesData?.services?.map((service, index) => {
          const hashTag = toCamelCase(service.title);
          return (
            <div id={hashTag} key={index} className="mt-8">
              <h3 className="text-2xl font-bold sm:text-3xl">
                {service.title}
              </h3>
              <p className="mt-4 text-gray-900">{service.spot}</p>
              <p className="mt-8 text-gray-900">{service.opening}</p>

              <div className="grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                {service.services.map((subService, subIndex) => {
                  const IconComponent = iconMapping[subService.subtitle];
                  return (
                    <div key={subIndex} className="flex items-start gap-4">
                      <span className="shrink-0 rounded-lg bg-fifth p-4">
                        {IconComponent && <IconComponent color="white" />}
                      </span>

                      <div>
                        <h2 className="text-lg font-bold">
                          {subService.subtitle}
                        </h2>
                        <p className="mt-1 text-sm text-gray-900">
                          {subService.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {service.benefits && service.benefits.length > 0 && (
                <>
                  <p className="mt-8 text-fifth">Benefits:</p>
                  <div className="grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                    {service.benefits.map((benefit, benIndex) => {
                      const IconComponent = iconMapping[benefit.subtitle];
                      return (
                        <div key={benIndex} className="flex items-start gap-4">
                          <span className="shrink-0 rounded-lg  bg-fifth p-4">
                            {IconComponent && <IconComponent color="white" />}
                          </span>

                          <div>
                            <h2 className="text-lg font-bold">
                              {benefit.subtitle}
                            </h2>
                            <p className="mt-1 text-sm text-gray-900">
                              {benefit.text}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

              <p className="mt-8 text-gray-900">{service.closing}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
