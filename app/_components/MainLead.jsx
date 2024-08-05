import Link from "next/link";
import React from "react";
import ReactCountryFlag from "react-country-flag";
import { FaWpforms } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaAt } from "react-icons/fa";

const MainLead = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Contact to Invest
            </h2>

            <p className="mt-4 text-gray-600">
              Contact us for property investment.
            </p>
              <p>
             <span><ReactCountryFlag
                countryCode="GB"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="GB"
                style={{
                  marginRight: "10px",
                  borderRadius: "50%"
                }}
            /></span>
              +44 7857 399 777
              </p>
              <p>

              <span><ReactCountryFlag
                countryCode="TR"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="TR"
                style={{
                  marginRight: "10px",
                  borderRadius: "50%",
                }}
            /></span>
              +90 532 266 3463
              </p>

            <Link
              href="/contact"
              className="mt-8 inline-block rounded bg-fifth px-8 py-2 text-xl font-medium text-primary shadow hover:bg-primary hover:text-fifth ocus:outline-none focus:ring active:bg-third active:text-fifth sm:w-auto"
            >
              Contact
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-1">
            <Link
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="tel:+447857399777"
            >
              <span className="inline-block rounded-lg bg-primary p-0 sm:p-3">
                <FaPhone className="size-5 sm:size-10" />
              </span>

              <h2 className="mt-2 font-bold text-lg sm:text-xl">Call Us</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Call us to discuss your property investment needs.
              </p>
            </Link>

            <Link
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="mailto:metincelik75@gmail.com"
            >
              <span className="inline-block rounded-lg bg-primary p-0 sm:p-3">
                <FaAt className="size-5 sm:size-10" />
              </span>

              <h2 className="mt-2 font-bold text-lg sm:text-xl">Email Us</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Email us for detailed property consultation.
              </p>
            </Link>

            <Link
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="/contact"
            >
              <span className="inline-block rounded-lg bg-primary p-0 sm:p-3">
                <FaWpforms className="size-5 sm:size-10" />
              </span>

              <h2 className="mt-2 font-bold text-lg sm:text-xl">
                Fill the Form
              </h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Fill out the form for property investment.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainLead;
