import { createContext, useState, useEffect, useContext } from "react";
import useApi from "../hooks/useApi";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState("");

  const { data } = useApi({ url: "https://dummyjson.com/products/1" });

  const addToCart = () => {
    setCartItems(...cartItems,data);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCartContextHook = () => {
    const cartData = useContext(CartContext);
    if (cartData === null)
      throw new Error("User Context is used outside boundary");
  
    return cartData;
  };
  