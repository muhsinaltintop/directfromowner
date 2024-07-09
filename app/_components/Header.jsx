"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../_atoms/LogoN";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-fifth py-2">
      <div className="text-primary mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-primary text-lg " href="/">
              <span className="sr-only">Home</span>
              <Logo />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-primary text-lg  transition hover:text-gray-200"
                    href="/aboutus"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-primary text-lg transition hover:text-gray-200"
                    href="/our-services"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-primary text-lg transition hover:text-gray-200"
                    href="/properties"
                  >
                    Properties
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-primary text-lg transition hover:text-gray-200"
                    href="/blog"
                  >
                    Blog&News
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-primary text-lg transition hover:text-gray-200"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="block md:hidden">
              <button
                className="text-primary"
                onClick={() => setIsOpen(!isOpen)}
              >
                <RxHamburgerMenu size={24} />
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <nav aria-label="Global">
              <ul className="flex flex-col items-center gap-4 text-sm mt-2">
                <li>
                  <Link
                    className="text-primary text-lg  transition hover:text-gray-200"
                    href="/aboutus"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-primary text-lg transition hover:text-gray-200"
                    href="/our-services"
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-primary text-lg transition hover:text-gray-200"
                    href="/properties"
                    onClick={() => setIsOpen(false)}
                  >
                    Properties
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-primary text-lg transition hover:text-gray-200"
                    href="/blog"
                    onClick={() => setIsOpen(false)}
                  >
                    Blog&News
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-primary text-lg transition hover:text-gray-200"
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
