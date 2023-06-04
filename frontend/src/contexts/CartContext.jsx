import React, { createContext, useState, useEffect, Children } from "react";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product, id) => {
    const newItems = { ...product, amount: 1 };
    console.log(newItems);
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCartItem = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCartItem);
    } else {
      setCart([...cart, newItems]);
    }
    console.log(cart);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
