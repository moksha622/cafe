import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";
import cafeInterior from "../images/cafe-interior.jpg"; // ✅ add this image

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Jill’s Café</h2>
          <p>
            At Jill’s Café, we serve warmth, one cup at a time. Our baristas craft
            every drink with love — from rich espressos to silky cappuccinos.
            Whether you’re here for work, a chat, or simply a cozy escape, our café
            offers the perfect blend of comfort and creativity.
          </p>
          <button
            className="about-btn"
            onClick={() => navigate("/about-cafe")}
          >
            Learn More About Us
          </button>
        </div>

        <div className="about-image">
          <img src={cafeInterior} alt="Café Interior" />
        </div>
      </div>
    </section>
  );
};

export default About;


