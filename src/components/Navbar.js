import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../context/Cartcontext";
import "./Navbar.css";
import cartIcon from "../assets/cart.png"; 
import logo from "../assets/logo.png"; 

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const handleNavClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo-container" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <img src={logo} alt="Logo" className="logo-img" />
        <h1 className="logo-text">Jill’s Café</h1>
      </div>

      <ul>
        <li><button onClick={() => handleNavClick("hero")} className="nav-btn">Home</button></li>
        <li><button onClick={() => handleNavClick("about")} className="nav-btn">About</button></li>
        <li><button onClick={() => handleNavClick("menu")} className="nav-btn">Menu</button></li>
        <li><button onClick={() => handleNavClick("contact")} className="nav-btn">Contact</button></li>
        

        {/* SignIn & Login buttons */}
        <li><Link to="/signin" className="btn-signin">Sign In</Link></li>
        <li><Link to="/login" className="btn-login">Login</Link></li>

        {/* Cart icon */}
        <li>
          <div className="cart-icon" onClick={() => navigate("/cart")}>
            <img src={cartIcon} alt="cart" />
            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;



