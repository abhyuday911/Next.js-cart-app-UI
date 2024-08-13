"use client";
import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";
import React, { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext)!;
  const isInCart = cart[product.id] > 0;

  const handleAddToCart = () => {
    addToCart(product.id);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden pt-2">
      <div className="w-full aspect-square relative">
        <Image
          src={product.image}
          alt="product image"
          fill={true}
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 truncate w-5/6">
          {product.title}
        </h2>
        <p className="text-gray-700 text-xl font-bold mb-4">
          {formatPrice(product.price)}
        </p>
        {isInCart ? (
          <div className="flex items-center">
            <button
              className="bg-red-500 text-white py-1 px-2 rounded-lg hover:bg-red-600 transition-colors mr-2"
              onClick={handleRemoveFromCart}
            >
              Remove
            </button>
            <span>Quantity: {cart[product.id]}</span>
          </div>
        ) : (
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
