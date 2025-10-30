// src/components/CartPage.js
import React from "react";
import { useCart } from "../context/Cartcontext";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

function CartPage() {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart, clearCart, totalAmount } = useCart();
  const navigate = useNavigate();

  return (
    <section className="cart-page">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>Price: ${Number(item.price).toFixed(2)}</p>
                  <div className="cart-quantity">
                    <button onClick={() => decreaseQuantity(item.name)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>
                  <p>Subtotal: ${(Number(item.price) * item.quantity).toFixed(2)}</p>
                  <button className="remove-btn" onClick={() => removeFromCart(item.name)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <h3>Total: ${totalAmount.toFixed(2)}</h3>
          <button onClick={() => navigate("/payment")}>Pay Now</button>
          <button onClick={clearCart} className="clear-btn">Clear Cart</button>
        </>
      )}
    </section>
  );
}

export default CartPage;
