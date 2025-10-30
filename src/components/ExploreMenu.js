
import React, { useState } from "react";
import { useCart } from "../context/Cartcontext";
import { useNavigate } from "react-router-dom";
import "./ExploreMenu.css";

function ExploreMenu() {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart, clearCart, totalAmount } = useCart();
  const [showCart, setShowCart] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState({}); // store selected date/time per item
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Cappuccino",
      price: 4.99,
      image: process.env.PUBLIC_URL + "/images/cappuccino.jpg",
      description: "Rich espresso with steamed milk foam.",
    },
    {
      name: "Latte",
      price: 5.49,
      image: process.env.PUBLIC_URL + "/images/latte.jpeg",
      description: "Smooth and creamy latte with steamed milk.",
    },
    {
      name: "Espresso",
      price: 3.99,
      image: process.env.PUBLIC_URL + "/images/espresso.jpeg",
      description: "Strong espresso shot for real coffee lovers.",
    },
    {
      name: "Mocha",
      price: 2.78,
      image: process.env.PUBLIC_URL + "/images/mocha.jpg",
      description: "Strong mocha shot for real mocha lovers.",
    },
    {
      name: "Croissant",
      price: 2.76,
      image: process.env.PUBLIC_URL + "/images/croissant.jpg",
      description: "Best coffee drink with sweet croissant.",
    },
    {
      name: "Brownie",
      price: 3.16,
      image: process.env.PUBLIC_URL + "/images/brownie.jpg",
      description: "Good drink with brownie.",
    },
  ];

  // ✅ Toggle side cart
  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  // ✅ Handle Buy Now with validation
  const handleBuyNow = (item) => {
    const selected = selectedDateTime[item.name];
    if (!selected || !selected.date || !selected.time) {
      alert("⚠️ Please select a date and time before buying.");
      return;
    }
    addToCart({ ...item, ...selected }); // pass selected date/time with item
    setShowCart(true);
  };

  // ✅ Handle date/time input changes
  const handleDateTimeChange = (name, type, value) => {
    setSelectedDateTime((prev) => ({
      ...prev,
      [name]: { ...prev[name], [type]: value },
    }));
  };

  return (
    <section className="explore-page">
      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleCart}>
        ☰
      </div>

      <h2>Explore Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price.toFixed(2)}</p>

            {/* Date & Time selectors */}
            <div className="datetime-select">
              <label>
                Date:
                <input
                  type="date"
                  value={selectedDateTime[item.name]?.date || ""}
                  onChange={(e) =>
                    handleDateTimeChange(item.name, "date", e.target.value)
                  }
                />
              </label>
              <label>
                Time:
                <input
                  type="time"
                  value={selectedDateTime[item.name]?.time || ""}
                  onChange={(e) =>
                    handleDateTimeChange(item.name, "time", e.target.value)
                  }
                />
              </label>
            </div>

            <button onClick={() => handleBuyNow(item)}>Buy Now</button>
          </div>
        ))}
      </div>

      {/* Slide-in Cart */}
      <div className={`side-cart ${showCart ? "open" : ""}`}>
        <div className="cart-header">
          <h3>Shopping Cart</h3>
          <button className="close-btn" onClick={() => setShowCart(false)}>
            ×
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <div className="cart-body">
            {cartItems.map((item, i) => (
              <div key={i} className="cart-item-side">
                <img src={item.image} alt={item.name} />
                <div>
                  <p className="cart-item-name">{item.name}</p>
                  <p>${item.price.toFixed(2)}</p>

                  {/* Show selected date and time */}
                  <p className="cart-datetime">
                    <strong>Date:</strong> {item.date || "—"} <br />
                    <strong>Time:</strong> {item.time || "—"}
                  </p>

                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.name)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.name)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <h4>Total: ${totalAmount.toFixed(2)}</h4>
            <button className="pay-btn" onClick={() => navigate("/payment")}>
              Pay Now
            </button>
            <button className="clear-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ExploreMenu;
