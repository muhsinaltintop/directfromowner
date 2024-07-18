import { IoEyeOutline } from "react-icons/io5";
import { VscTarget } from "react-icons/vsc";
import { RiMoneyPoundCircleLine } from "react-icons/ri";
import { FaHouseChimneyUser } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { GrUserExpert } from "react-icons/gr";
import { FaPersonBurst } from "react-icons/fa6";
import { BsTransparency } from "react-icons/bs";
import { GrContact } from "react-icons/gr";
import Contact from "../_components/Contact";

const page = () => {
  return (
    <section className="bg-primary text-fifth">
      <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-4">
        <div className="mt-8" id="aboutUs">
          <h2 className="text-3xl font-bold sm:text-4xl">About Us</h2>

          <p className="mt-4 text-gray-900">
            Global Property Management specialises in the buying, selling, and
            management of real estate in both the UK and Turkey. We provide
            reliable, professional, and personalised services to ensure our
            clients get the best out of their property investments. With years
            of experience and extensive industry knowledge, our team delivers
            successful and sustainable solutions in the real estate sector.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-fifth text-primary p-4">
              <IoEyeOutline />
            </span>

            <div>
              <h2 className="text-lg font-bold">Our Mission</h2>

              <p className="mt-1 text-sm text-gray-900">
                Our mission is to make property investments easier for our
                clients by offering the highest quality and value, while acting
                as a trustworthy guide throughout the process. We prioritise
                transparency and integrity at every step, ensuring a smooth
                experience for both buyers and sellers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-fifth text-primary p-4">
              <VscTarget />
            </span>

            <div>
              <h2 className="text-lg font-bold">Our Vision</h2>

              <p className="mt-1 text-sm text-gray-900">
                Our vision is to be recognised as a leading brand in the global
                real estate sector, setting ourselves apart with innovative
                services. By combining technology and expertise, we aim to
                provide our clients with the most modern and practical
                solutions, not just in the UK and Turkey but on an international
                scale. We strive to be a reliable partner in the global real
                estate market by prioritising customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-4">
        <div className="max-w-xl" id="ourServices">
          <h2 className="text-2xl font-bold sm:text-3xl">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-fifth text-primary p-4">
              <RiMoneyPoundCircleLine />
            </span>

            <div>
              <h2 className="text-lg font-bold">
                Real Estate Buying and Selling Consultancy
              </h2>

              <p className="mt-1 text-sm text-gray-900">
                Our experienced team offers comprehensive consultancy services
                for the buying and selling processes of real estate. We assist
                with market analysis, pricing strategies, and negotiation
                processes.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-fifth text-primary p-4">
              <FaHouseChimneyUser />
            </span>

            <div>
              <h2 className="text-lg font-bold">Property Management</h2>

              <p className="mt-1 text-sm text-gray-900">
                We ensure your properties are professionally managed, including
                rental, maintenance, repairs, rent collection, and strategies to
                increase property value.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-fifth text-primary p-4">
              <BsGraphUpArrow />
            </span>

            <div>
              <h2 className="text-lg font-bold">Investment Consultancy</h2>

              <p className="mt-1 text-sm text-gray-900">
                We develop and implement personalised investment strategies to
                ensure the best returns on your real estate investments. We
                provide all the support needed to identify and evaluate the
                right investment opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-4">
        <div className="max-w-xl" id="whyChooseUs">
          <h2 className="text-2xl font-bold sm:text-3xl">Why Choose Us?</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-fifth text-primary p-4">
              <GrUserExpert />
            </span>

            <div>
              <h2 className="text-lg font-bold">Experience and Expertise</h2>

              <p className="mt-1 text-sm text-gray-900">
                OWith our extensive experience and expert team, we guarantee the
                best service at all times.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-fifth text-primary p-4">
              <FaPersonBurst />
            </span>

            <div>
              <h2 className="text-lg font-bold">Personalised Service</h2>

              <p className="mt-1 text-sm text-gray-900">
                We listen carefully to each client’s needs and goals, offering
                tailored solutions.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-fifth text-primary p-4">
              <BsTransparency />
            </span>

            <div>
              <h2 className="text-lg font-bold">Trust and Transparency</h2>

              <p className="mt-1 text-sm text-gray-900">
                We build trustworthy relationships with our clients by adhering
                to principles of transparency and honesty at every step of our
                business processes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-4">
        <div className="max-w-xl" id="contactUs">
          <h2 className="text-2xl font-bold sm:text-3xl">Contact Us</h2>
        </div>

        <div className="mt-4 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="flex items-start gap-4">
            <span className="shrink-0 rounded-lg bg-fifth text-primary p-4">
              <GrContact />
            </span>

            <div>
              <p className="mt-1 text-large text-gray-900">
                To reach us and learn more about our services, you can fill out
                our contact form. Global Property Management is always by your
                side for all your real estate needs!
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Contact />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
