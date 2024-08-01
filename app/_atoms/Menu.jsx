"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Menu = ({menuItems}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            {menuItems?.map((item, index)=> {
            return (<li key={index}>
              <Link
                className="text-primary text-lg  transition hover:text-gray-200"
                href={`/${item?.attributes?.menuLink}`}
              >
                {item?.attributes?.menuName}
              </Link>
            </li>)

            })}
          
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
            {menuItems?.map((item, index)=> {
            return (<li key={index}>
              <Link
                className="text-primary text-lg  transition hover:text-gray-200"
                href={`/${item?.attributes?.menuLink}`}
              >
                {item?.attributes?.menuName}
              </Link>
            </li>)

            })}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Menu;
