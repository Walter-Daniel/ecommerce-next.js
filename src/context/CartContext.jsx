import React, { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const [quantities, setQuantities] = useState([]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    const storedQuantities = localStorage.getItem("quantities");
    if (storedCartItems && storedQuantities) {
      setCartItems(JSON.parse(storedCartItems));
      setQuantities(JSON.parse(storedQuantities));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("quantities", JSON.stringify(quantities));
  }, [cartItems, quantities]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity) => {
    setQuantities((prevQuantities) => [...prevQuantities, quantity]);
    setCartItems((prevItems) => [...prevItems, { ...product, quantity }]);
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => {
      const updatedCartItems = [...prevItems];
      updatedCartItems.splice(index, 1);
      return updatedCartItems;
    });

    setQuantities((prevQuantities) => {
      const updatedQuantities = [...prevQuantities];
      updatedQuantities.splice(index, 1);
      return updatedQuantities;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    setQuantities([]);
  };
  const setUserInformation = (userInfo) => {
    setUser(userInfo);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        user,
        setCartItems,
        setUserInformation,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
