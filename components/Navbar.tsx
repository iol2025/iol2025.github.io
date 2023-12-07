import React from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-10">
        <div className="flex bg-amber-200 justify-between px-10 shadow-md">
          <span className="font-bold text-xl py-3">IOL 2025</span>
          <ul className="hidden md:flex text-gray-600">
            <li>
              <Link href="/">
                <div className="transition p-4 font-medium text-sm inline-flex  hover:bg-amber-300">
                  <p className="hover:text-black">Home</p>
                </div>
              </Link>
            </li>
            <li>
              <Dropdown
                name="About"
                options={["About", "Our Team"]}
                link={["about", "team"]}
              />
            </li>
            <li>
              <Dropdown
                name="Support Us"
                options={["Support Us", "Sponsors"]}
                link={["support", "sponsor"]}
              />
            </li>
            <li>
              <Link href="#contact">
                <div className="transition p-4 font-medium text-sm inline-flex  hover:bg-amber-300">
                  <p className="hover:text-black">Contact Us</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
