import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false); // 👈 state for hamburger/cart visibility

  // ✅ Add item to cart or increase quantity
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // ✅ Decrease item quantity
  const decreaseQuantity = (name) => {
    setCartItems((prev) =>
      prev
        .map((i) =>
          i.name === name ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  // ✅ Remove an item from cart
  const removeFromCart = (name) => {
    setCartItems((prev) => prev.filter((i) => i.name !== name));
  };

  // ✅ Clear all items
  const clearCart = () => setCartItems([]);

  // ✅ Calculate total
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  // ✅ Toggle cart (hamburger)
  const toggleCart = () => setShowCart((prev) => !prev);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        totalAmount,
        showCart,
        setShowCart,
        toggleCart, // 👈 exposed for hamburger icon
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
