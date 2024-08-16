"use client";
import React, { createContext, useState, ReactNode, useEffect } from "react";

interface itemDetails {
  quantity: number;
  price: number;
}

interface CartContextType {
  cart: Record<number, itemDetails>; // Key is the product ID, value is the quantity
  addToCart: (id: number, price: number) => Promise<boolean>;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Record<number, itemDetails>>({
    3: { quantity: 1, price: 55.99 },
    7: { quantity: 3, price: 9.99 },
  });

  const addToCart = (id: number, price: number) => {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        setCart((prevCart) => ({
          ...prevCart,
          [id]: { quantity: (prevCart[id]?.quantity || 0) + 1, price }, // Increment quantity if item exists, otherwise set to 1
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

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prevCart) => ({
      ...prevCart,
      [id]: { quantity, price: prevCart[id].price },
    }));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
