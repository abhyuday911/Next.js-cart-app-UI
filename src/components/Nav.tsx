"use client";

import { CartContext } from "@/contexts/CartContext";
import { useTheme } from "@/hooks/useTheme";
import Link from "next/link";
import React, { useContext } from "react";

const Nav = () => {
  const { cart } = useContext(CartContext)!;
  const [theme, toggleTheme] = useTheme();
  return (
    <div className="fixed top-0 right-0 z-10 px-4 py-2 font-medium text-sm gilroy bg-zinc-800 rounded-bl-md w-[50vw]">
      <div className="flex items-center space-x-4 h-full gap-8 text-zinc-300 pl-4">
        <Link href="/" className="hover:scale-105">
          Home
        </Link>
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
          className="p-2 rounded-md border text-gray-900 dark:text-gray-300 border-gray-300 bg-gray-300 dark:bg-gray-700 dark:border-gray-600 focus:outline-none"
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Nav;
