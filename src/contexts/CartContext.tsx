"use client";
import React, { createContext, useState, ReactNode } from "react";

interface CartContextType {
  cart: Record<number, number>; // Key is the product ID, value is the quantity
  addToCart: (id: number) => Promise<boolean>;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Record<number, number>>({});

  const addToCart = (id: number) => {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        setCart((prevCart) => ({
          ...prevCart,
          [id]: (prevCart[id] || 0) + 1, // Increment quantity if item exists, otherwise set to 1
        }));
        resolve(true);
      }, 300);
    });
    return promise;
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => {
      const { [id]: _, ...newCart } = prevCart; // Remove the item from the cart
      return newCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
