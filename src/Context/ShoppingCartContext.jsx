import React, { createContext, useState, useContext } from "react";

const ShoppingCartContext = createContext();

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState({});

  return (
    <ShoppingCartContext.Provider value={{shoppingCart, setShoppingCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};