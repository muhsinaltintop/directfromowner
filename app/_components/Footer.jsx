import Link from "next/link";
import React from "react";
import { getMenu } from "../_utils/GlobalApi";
import SocialIcons from "../_atoms/SocialIcons"

const Footer = async() => {
  const menuItems = await getMenu();
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
            Want us to email you with the latest real estate news?
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email">
                Email
              </label>

              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="john@doe.com"
              />

              <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
              Follow us on our social media accounts for latest real estate news
              and new properties.
            </p>
            <SocialIcons/>
            
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-medium text-gray-900"> Pages </strong>

              <ul className="mt-6 space-y-1">
              {menuItems?.map((item, index)=> {
            return (<li key={index}>
              <Link
                className="text-gray-700 transition hover:text-gray-700/75"
                href={`/${item?.attributes?.menuLink}`}
              >
                {item?.attributes?.menuName}
              </Link>
            </li>)

            })}
              </ul>
            </div>
            <div>
              <strong className="font-medium text-gray-900"> Services </strong>

              <ul className="mt-6 space-y-1">
                <li key="1">
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="our-services#propertyBuyingConsultancy"
                  >
                    Property Buying Consultancy
                  </a>
                </li>

                <li key="2">
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="our-services#propertyManagement"
                  >
                    Property Management
                  </a>
                </li>

                <li key="3">
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="our-services#investmentConsultancy"
                  >
                    Investment Consultancy
                  </a>
                </li>

                <li key="4">
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="our-services#renovationProjects"
                  >
                    Renovation Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <strong className="font-medium text-gray-900"> Support </strong>

              <ul className="mt-6 space-y-1">
                <li key="1">
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="/faq"
                  >
                    FAQs
                  </a>
                </li>

                {/* <li key="1">
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="#"
                  >
                    Contact
                  </a>
                </li>

                <li key="1">
                  <a
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href="#"
                  >
                    Live Chat
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8">
          <p className="text-center text-xs/relaxed text-gray-500">
            © Company 2022. All rights reserved.
            <br />
            Designed by
            <a
              href="#"
              className="text-gray-700 underline transition hover:text-gray-700/75"
            >
              Odycodigital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
