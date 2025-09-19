"use client";
import React, { useState } from "react";
import Image from "next/image";
import {  FaBars, FaTimes } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50 md:pb-0 pb-5">
      {/* Flex Container */}
      <div className="max-w-[1400px] w-[95%] mx-auto flex items-center justify-between py-3">

        {/* Logo */}
        <div className="flex-shrink-0 flex items-center h-10 w-10 relative">
          <Image
            src="/assets/images/logo.png"
            alt="VastraSale Logo"
            fill
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="cursor-pointer"
          />

        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-center gap-5 xl:gap-6 text-black font-medium">
          {["Men", "Women", "Kids", ].map((item) => (
            <a key={item} href="#" className=" transition-colors">
              {item}
            </a>
          ))}
        </div>
        {/* Search Bar for md & lg screens */}
        <div className="hidden md:flex flex-1 justify-center mx-4">
          <div className="relative w-full max-w-md lg:max-w-lg">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full rounded-[8px] border border-gray-300 bg-gray-50 pl-4 pr-10 py-2 text-sm shadow-sm
                         outline-none transition"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-black p-2 rounded-full
                                transition-colors">
              <IoMdSearch className="w-6 h-6 cursor-pointer text-black  transition" />
            </button>
          </div>
        </div>

        {/* Icons + Profile + Mobile Toggle */}
        <div className="flex items-center  justify-end space-x-4 xl:space-x-4">
          {/* Profile */}
          <div className="flex items-center  space-x-2">
            <Image
              src="/assets/images/profile.png"
              alt="User"
              width={32}
              height={32}
              className="rounded-full"
            />
            
          </div>
          <FaRegHeart size={18} className=" cursor-pointer text-black  transition" />
          <FiShoppingCart size={18} className=" cursor-pointer text-black  transition" />

          


        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-black ml-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg px-6 py-8 transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Mobile Menu Items */}
        {["Men", "Women", "Kids", "Shop", "Contact Us"].map((item) => (
          <a
            key={item}
            href="#"
            className="block text-gray-700 hover:text-blue-500 font-medium py-3 transition"
          >
            {item}
          </a>
        ))}

      </div>


      <div className=" xs:block md:hidden flex flex-1 justify-center mx-4 mt-2">
        <div className="relative w-full ">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full rounded-[8px] border border-gray-300 bg-gray-50 pl-4 pr-10 py-2 text-sm shadow-sm
                          transition"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2  text-black p-2 rounded-full
                                transition-colors cursor-pointer">
            <IoMdSearch className="w-6 h-6 cursor-pointer text-black  transition"  />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
