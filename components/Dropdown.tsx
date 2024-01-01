"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type DropdownProps = {
  name: string;
  options: string[];
  link: string[];
};

const Dropdown = ({ name, options, link }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickAway = (e: any) => {
      if (!btnRef.current?.contains(e.target as Node)) {
        closeDropdown();
      }
    };
    document.addEventListener("click", handleClickAway);
    return () => {
      document.removeEventListener("click", handleClickAway);
    };
  }, [btnRef]);

  return (
    <div className="w-full">
      <div className="relative inline-block">
        <button
          type="button"
          className="transition px-4 py-4 text-gray-700 hover:bg-amber-300 font-medium text-sm inline-flex items-center"
          onClick={toggleDropdown}
          ref={btnRef}
        >
          {name}{" "}
          <svg
            className={`${
              isOpen ? "-rotate-180" : ""
            } w-2.5 h-2.5 ml-2.5 transition-transform duration-300`}
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
        <div
          className={`${
            isOpen ? "opacity-100" : "hidden opacity-0"
          } origin-top-right absolute right-0 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10`}
        >
          <ul
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <Link href={link[index]} key={index}>
                <p
                  className="block m-1 px-4 py-2 rounded-md text-sm text-gray-700 transition hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  {option}
                </p>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
