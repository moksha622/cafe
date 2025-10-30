import React, { useState } from "react";
import { useCart } from "../context/Cartcontext";
import "./Menu.css";
import latte from "../assets/coffee-americano.jpg";
import croissant from "../assets/coffee-cake.jpg";
import cappuccino from "../assets/coffee-cortado.jpg";
import espresso from "../assets/coffee-icecream.jpg";
import brownie from "../assets/coffee-smoothie.jpg"; // Adjust path to your folder

function Menu() {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart, clearCart, totalAmount } = useCart();
  const [showCart, setShowCart] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState({});

  const items = [
    {
      name: "Coffee cortado",
      price: 4.5,
      img: cappuccino,
      desc: " Bold, smooth, and concentrated ",
    },
    {
      name: "Coffee americano",
      price: 4.0,
      img: latte,
      desc: "Rich flavor of espresso but with a milder, lighter body, similar in strength to a cup of brewed coffee",
    },
    {
      name: "Coffee icecream",
      price: 3.0,
      img: espresso,
      desc: "Creamy blend featuring the rich, robust flavor of real espresso or cold-brew",
    },
    {
      name: "Coffee cake",
      price: 2.5,
      img: croissant,
      desc: "Moist, tender, single-layer cake, often made with sour cream or buttermilk for a delicate tang",
    },
    {
      name: "Coffee smoothie",
      price: 1.5,
      img: brownie,
      desc: "Coffee, blended into a frosty, delicious, and creamy smoothie",
    },
  ];

  // ✅ Toggle Cart visibility
  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  // ✅ Handle Buy Now (with validation)
  const handleBuyNow = (item) => {
    const selected = selectedDateTime[item.name];
    if (!selected || !selected.date || !selected.time) {
      alert("⚠️ Please select a date and time before buying.");
      return;
    }
    addToCart({ ...item, ...selected });
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
    <section id="menu" className="menu">
      <h2>Quick Taste</h2>

      <div className="menu-grid">
        {items.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="item-desc">{item.desc}</p>
            <p className="price">${item.price.toFixed(2)}</p>

            {/* Date & Time selection */}
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

            <button className="buy-btn" onClick={() => handleBuyNow(item)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* Slide-in Shopping Cart */}
      <div className={`side-cart ${showCart ? "open" : ""}`}>
        <div className="cart-header">
          <h3>Shopping Cart</h3>
          <button className="close-btn" onClick={() => setShowCart(false)}>×</button>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-text">No items in cart.</p>
        ) : (
          <div className="cart-body">
            {cartItems.map((item, i) => (
              <div key={i} className="cart-item-side">
                <img src={item.img} alt={item.name} />
                <div>
                  <p className="cart-item-name">{item.name}</p>
                  <p>${item.price.toFixed(2)}</p>

                  {/* Display chosen date/time */}
                  <p className="cart-datetime">
                    <strong>Date:</strong> {item.date || "—"} <br />
                    <strong>Time:</strong> {item.time || "—"}
                  </p>

                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.name)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>

                  <button className="remove-btn" onClick={() => removeFromCart(item.name)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <h4 className="cart-total">Total: ${totalAmount.toFixed(2)}</h4>
            <button className="pay-btn">Pay Now</button>
            <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Menu;

