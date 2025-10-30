import React from "react";
import "./Hero.css";
import coffee from "../assets/coffee.jpg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/explore-menu");
  };

  return (
    <section
      id="hero"
      className="hero"
      style={{ backgroundImage: `url(${coffee})` }}
    >
      <div className="hero-content">
        <h1>Welcome to Jill’s Café</h1>
        <p>Where every cup tells a story.</p>
        <button onClick={handleExploreClick}>Explore Menu</button>
      </div>
    </section>
  );
}

export default Hero;
