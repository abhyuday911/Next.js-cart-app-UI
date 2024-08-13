"use client";
import React, { useContext, useEffect, useState } from "react";
import Card from "./ui/Card";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchProducts() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      alert("Failed to fetch products: " + error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(
          (product: {
            id: number;
            title: string;
            price: number;
            image: string;
          }) => (
            <Card
              key={product.id}
              product={product}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ProductList;
