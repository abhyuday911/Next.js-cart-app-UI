"use client";

import { CartContext } from "@/contexts/CartContext";
import { useTheme } from "@/hooks/useTheme";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const Nav = () => {
  const { cart } = useContext(CartContext)!;
  const [theme, toggleTheme] = useTheme();
  return (
    <div className="fixed top-0 right-0 z-10 px-4 py-3 font-medium text-md gilroy bg-zinc-950 w-full">
      <div className="flex items-center  h-full gap-4 md:gap-8 text-zinc-300 px-2 lg:px-8">
        <Link href="/" className="hover:scale-105 items-center gap-2 hidden md:flex">
          <i className="ri-home-line text-xl"></i>
          <h5 className="text-xl font-semibold">Shopping Kart</h5>
        </Link>
        <div className="w-full md:w-[40%] ml-auto">
          <div className="flex items-center w-full h-10 rounded-full focus-within:shadow-lg bg-neutral-200 overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-600">
              <i className="ri-search-2-line ri-lg"></i>
            </div>
            <input
              className="peer h-full w-full outline-none text-base font-medium text-gray-700 pr-2 bg-neutral-200"
              type="text"
              id="search"
              placeholder="Search something.."
            />
          </div>
        </div>
        <Link href="/" className="hover:scale-105 ml-auto"></Link>
        <Link href="/cart" className="hover:scale-105">
          <div className="relative py-2">
            {Object.keys(cart).length > 0 && (
              <div className="-top-1 absolute left-3">
                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white scale-90">
                  {/* {Object.values(cart).reduce((a, b) => a + b, 0)} */}
                  {Object.keys(cart).length}
                </p>
              </div>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
        </Link>
        <button
          onClick={() => toggleTheme()}
          className="p-2 rounded-md text-gray-300 bg-zinc-900 bg-transparent dark:bg-gray-700 focus:outline-none "
        >
          {theme === "dark" ? (
            <i className="ri-sun-line ri-xl"></i>
          ) : (
            <i className="ri-moon-line ri-xl"></i>
          )}
        </button>
        <div className="h-10 w-10 border border-zinc-600 rounded-full bg-zinc-200 relative">
          <Image
            src="/placeholder.png"
            alt="profile pic"
            className="h-12 w-12 rounded-full"
            fill={true}
            priority={false}
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 100vw, 33vw"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Nav;
