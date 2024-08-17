"use client";
import CartItemList from "@/components/cart/CartItemList";
import OrderSummary from "@/components/cart/OrderSummary";
import Nav from "@/components/Nav";
import { CartContext } from "@/contexts/CartContext";
import React, { useContext } from "react";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext)!;

  return (
    <section className="bg-slate-200 text-black dark:text-slate-300 p-2  pt-20 py-8 px-2 antialiased dark:bg-gray-900 min-h-screen">
      <Nav />
      <div className="mx-auto max-w-screen-xl pt-4 md:pt-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Shopping Cart
        </h2>
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <CartItemList
            cart={cart}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
          {Object.keys(cart).length != 0 && <OrderSummary cart={cart} />}
        </div>
      </div>
    </section>
  );
};

export default Cart;
