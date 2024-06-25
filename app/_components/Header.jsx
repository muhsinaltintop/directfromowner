import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-fifth">
      <div className="text-primary mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-primary text-lg" href="/">
              <span className="sr-only">Home</span>
              <Image
                src={"/logo-yatay.png"}
                width="200"
                height="200"
                alt="logo"
              />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-primary text-lg  transition hover:text-gray-500/75"
                    href="/aboutus"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-primary text-lg transition hover:text-gray-500/75"
                    href="/our-services"
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-primary text-lg transition hover:text-gray-500/75"
                    href="#"
                  >
                    Proporties
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-primary text-lg transition hover:text-gray-500/75"
                    href="#"
                  >
                    Blog&News
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-primary text-lg transition hover:text-gray-500/75"
                    href="#"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="#"
                >
                  Login
                </Link>

                <div className="hidden sm:flex">
                  <Link
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                    href="#"
                  >
                    Register
                  </Link>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
