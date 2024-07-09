"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
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
          <button className="text-primary" onClick={() => setIsOpen(!isOpen)}>
            <RxHamburgerMenu size={24} />
          </button>
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
  );
};

export default HamburgerMenu;
