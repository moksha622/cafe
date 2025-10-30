// src/pages/Home.js
import React, { useState } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu"; // Quick Taste
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CartPage from "../components/CartPage";

function Home() {
  const [showCart, setShowCart] = useState(false);

  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);

  return (
    <div>
      <Hero />
      <About />
      <Menu openCart={openCart} />
      <Contact />
      <Footer />
      {showCart && <CartPage onClose={closeCart} />}
    </div>
  );
}

export default Home;

