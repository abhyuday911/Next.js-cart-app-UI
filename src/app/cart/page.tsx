"use client";
import Nav from "@/components/Nav";
import CartItemCard from "@/components/ui/CartItemCard";
import { CartContext } from "@/contexts/CartContext";
import { formatPrice } from "@/utils/formatPrice";
import React, { useContext } from "react";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext)!;

  const priceDetails = () => {
    const price = Object.values(cart).reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    const tax = (price * 18) / 100;
    const total = price + tax;
    return { price, tax, total };
  };

  return (
    <section className="bg-slate-200 text-black dark:text-slate-300 py-8 px-2 antialiased dark:bg-gray-900 md:py-16 min-h-screen">
      <Nav />
      <div className="mx-auto max-w-screen-xl">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Shopping Cart
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="space-y-6  w-full flex-none lg:max-w-2xl xl:max-w-4xl relative lg:h-[70vh] overflow-auto">
            {Object.keys(cart).length === 0 ? (
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6 flex items-center h-60 justify-center">
                <div className="text-center text-gray-500 dark:text-gray-400 md:text-xl">
                  Your cart is empty
                </div>
              </div>
            ) : (
              Object.keys(cart)
                .reverse()
                .map((id) => (
                  <CartItemCard
                    key={id}
                    quantity={cart[Number(id)].quantity}
                    id={Number(id)}
                    removeFromCart={removeFromCart}
                    updateQuantity={updateQuantity}
                  />
                ))
            )}
          </div>
          {Object.keys(cart).length != 0 && (
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  Order summary
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Original price
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        {formatPrice(priceDetails().price)}
                      </dd>
                    </dl>

                    {/* <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Savings
                      </dt>
                      <dd className="text-base font-medium text-green-600">
                        -$299.00
                      </dd>
                    </dl> */}
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Tax
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        {formatPrice(priceDetails().tax)}
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                      {formatPrice(priceDetails().total)}
                    </dd>
                  </dl>
                </div>

                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Proceed to Checkout
                </a>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {" "}
                    or{" "}
                  </span>
                  <a
                    href="/"
                    title=""
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 underline hover:no-underline dark:text-blue-500"
                  >
                    Continue Shopping
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="voucher"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Do you have a voucher or gift card?{" "}
                    </label>
                    <input
                      type="text"
                      id="voucher"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                      placeholder=""
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Apply Code
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default page;
