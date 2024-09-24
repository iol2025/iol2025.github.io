"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dropdown, MobileDropdown } from "./Dropdown";
import menu from "@/assets/menu.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeNav = () => {
    setIsOpen(false);
  };
  return (
    <>
      <nav className="invisible md:visible fixed top-0 right-0 left-0 z-10">
        <div className="flex bg-amber-200 justify-between px-10 shadow-md">
          <span className="font-bold text-xl py-3">IOL 2025</span>
          <ul className="flex text-gray-700">
            <li>
              <Link href="/">
                <div className="transition p-4 font-medium text-sm inline-flex  hover:bg-amber-300">
                  <p className="hover:text-black">Home</p>
                </div>
              </Link>
            </li>
            <li>
              <Dropdown
                name="IOL 2025"
                options={["Programme", "Venues", "Transportation", "Important dates", "Accommodation", "Guidebook", "Local committee", "Volunteering"]}
                link={["/contest/programme", "/contest/venues", "/contest/transportation", "/contest/dates", "/contest/accommodation", "/contest/guidebook", "/contest/committee", "/contest/volunteering"]}
              />
            </li>
            <li>
              <Dropdown
                name="Results"
                options={["Individual contest", "Group contest"]}
                link={["/results/individual", "/results/group"]}
              />
            </li>
            <li>
              <Link href="/gallery">
                <div className="transition p-4 font-medium text-sm inline-flex  hover:bg-amber-300">
                  <p className="hover:text-black">Gallery</p>
                </div>
              </Link>
            </li>
            <li>
              <Dropdown
                name="Sponsors"
                options={["Sponsors & Partners", "Donation"]}
                link={["/sponsors", "#donation"]}
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
      </nav>

      {/* ---mobile NavBar below--- */}

      <nav className="visible md:invisible  bg-amber-200 shadow-md fixed top-0 right-0 left-0 z-10">
        <div className="flex justify-between px-10">
          <span className="font-bold text-xl py-3">IOL 2025</span>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            <Image src={menu} alt="menu" width={25} />
          </button>
        </div>
        <div
          className={`${
            isOpen ? "opacity-100" : "hidden opacity-0"
          } text-gray-700`}
        >
          <ul>
            <div className="p-1 mx-8 border-gray-600/25 border-b-2" />
            <li>
              <Link href="/" onClick={closeNav}>
                <div className="transition w-full p-4 font-medium justify-center text-md inline-flex hover:bg-amber-300">
                  <p className="hover:text-black">Home</p>
                </div>
              </Link>
            </li>
            <div className="mx-8 border-gray-600/25 border-b-2" />
            <li>
              <MobileDropdown
                name="IOL 2025"
                options={["Programme", "Venues", "Transportation", "Important dates", "Accommodation", "Guidebook", "Local committee", "Volunteering"]}
                link={["/contest/programme", "/contest/venues", "/contest/transportation", "/contest/dates", "/contest/accommodation", "/contest/guidebook", "/contest/committee", "/contest/volunteering"]}
                {...{closeNav}}
              />
            </li>
            <div className="mx-8 border-gray-600/25 border-b-2" />
            <li>
              <MobileDropdown
                name="Results"
                options={["Individual contest", "Group contest"]}
                link={["/results/individual", "/results/group"]}
                {...{closeNav}}
              />
            </li>
            <div className="mx-8 border-gray-600/25 border-b-2" />
            <li>
              <Link href="/gallery" onClick={closeNav}>
                <div className="transition w-full p-4 font-medium justify-center text-md inline-flex hover:bg-amber-300">
                  <p className="hover:text-black">Gallery</p>
                </div>
              </Link>
            </li>
            <div className="mx-8 border-gray-600/25 border-b-2" />
            <li>
              <MobileDropdown
                name="Sponsors"
                options={["Sponsors & Partners", "Donation"]}
                link={["/sponsors", "#donation"]}
                {...{closeNav}}
              />
            </li>
            <div className="mx-8 border-gray-600/25 border-b-2" />
            <li>
              <Link href="#contact" onClick={closeNav}>
                <div className="transition w-full p-4 font-medium justify-center text-md inline-flex hover:bg-amber-300">
                  <p className="hover:text-black">Contact Us</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
