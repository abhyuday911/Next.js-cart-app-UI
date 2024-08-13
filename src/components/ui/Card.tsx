"use client";
import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";
import React, { useContext, useState } from "react";
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
  const [loading, setLoading] = useState(false);
  const isInCart = cart[product.id] > 0;

  const handleAddToCart = () => {
    setLoading(true);
    addToCart(product.id).then(() => {
      setLoading(false);
    });
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
              className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors w-1/2 mr-2"
              onClick={handleRemoveFromCart}
            >
              Remove
            </button>
            <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition-colors">
              View in Cart
            </button>
          </div>
        ) : loading ? (
          <button
            type="button"
            className="bg-indigo-400 w-full py-2 rounded-lg text-white hover:bg-indigo-300 hover:cursor-not-allowed duration-[500ms,800ms]"
            disabled
          >
            <div className="flex items-center w-full justify-center">
              <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
              <div className="ml-4"> Adding To The Cart... </div>
            </div>
          </button>
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
