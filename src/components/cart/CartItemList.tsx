import React from "react";
import CartItemCard from "./CartItemCard";

interface ItemDetails {
  quantity: number;
  price: number;
}

interface Props {
  cart: Record<number, ItemDetails>;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

const EmptyCart = () => (
  <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6 flex items-center h-60 justify-center">
    <div className="text-center text-gray-500 dark:text-gray-400 md:text-xl">
      Your cart is empty
    </div>
  </div>
);

const CartItemList: React.FC<Props> = ({
  cart,
  removeFromCart,
  updateQuantity,
}) => {
  return (
    <div className="space-y-6  w-full flex-none lg:max-w-2xl xl:max-w-4xl relative lg:h-[70vh] overflow-auto">
      {Object.keys(cart).length === 0 ? (
        <EmptyCart />
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
  );
};

export default CartItemList;
