"use client";
import Link from "next/link";
import React, { useState } from "react";

type DropdownProps = {
  name: string;
  options: string[];
  link: string[];
};

const Dropdown = ({ name, options, link }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full">
      <div className="relative inline-block">
        <button
          type="button"
          className="transition px-4 py-4 text-gray-600 hover:bg-amber-300 font-medium text-sm inline-flex items-center"
          onClick={toggleDropdown}
        >
          {name}{" "}
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {options.map((option, index) => (
                <Link href={link[index]}>
                  <p
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdown}
                  >
                    {option}
                  </p>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
