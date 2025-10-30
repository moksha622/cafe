import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Context
import { CartProvider } from "./context/Cartcontext";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ExploreMenu from "./components/ExploreMenu";
import CartPage from "./components/CartPage";
import PaymentPage from "./components/PaymentPage";

// Footer Pages (Quick Links)
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";
import ContactPage from "./pages/Contact"; // renamed to avoid conflic
import AboutCafe from "./pages/AboutCafe";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <CartProvider>
      <Router>
        {/* Navbar displayed on all pages */}
        <Navbar />

        {/* Routes */}
        <Routes>
          {/* Home page with multiple sections */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Menu />
                <Contact />
              </>
            }
          />

          {/* Explore Menu page */}
          <Route path="/explore-menu" element={<ExploreMenu />} />

          {/* Shopping Cart */}
          <Route path="/cart" element={<CartPage />} />

          {/* Payment Page */}
          <Route path="/payment" element={<PaymentPage />} />

          {/* Footer Quick Links */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/contact" element={<ContactPage />} />
           <Route path="/about-cafe" element={<AboutCafe />} />
            <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>

        {/* Footer displayed on all pages */}
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
