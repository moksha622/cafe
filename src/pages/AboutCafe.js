import React from "react";
import "./AboutCafe.css";
import cafeFront from "../images/cafe-front.jpg";
import coffeeArt from "../images/coffee-art.jpg";
import cozyCorner from "../images/cozy-corner.jpg";

const AboutCafe = () => {
  return (
    <div className="aboutcafe-container">
      <header className="aboutcafe-header">
        <h1>Welcome to Jill’s Café</h1>
        <p>Your cozy destination for delightful coffee and good vibes.</p>
      </header>

      <section className="aboutcafe-story">
        <h2>Our Story</h2>
        <p>
          Founded in 2015, Jill’s Café was born from a simple idea — to create a
          space where everyone feels at home. We believe great conversations
          start over great coffee. Our beans are ethically sourced and freshly
          roasted to bring out the perfect aroma in every cup.
        </p>
      </section>

      <section className="aboutcafe-gallery">
        <h2>Café Interiors</h2>
        <div className="gallery-grid">
          <img src={cafeFront} alt="Café Front" />
          <img src={coffeeArt} alt="Coffee Art" />
          <img src={cozyCorner} alt="Cozy Corner" />
        </div>
      </section>

      <section className="aboutcafe-vision">
        <h2>Our Vision</h2>
        <p>
          At Jill’s Café, we aim to serve not just beverages but experiences. From
          our cozy seating to our eco-friendly designs, every detail is crafted to
          bring comfort and happiness. Come sip, relax, and make memories.
        </p>
      </section>
    </div>
  );
};

export default AboutCafe;
