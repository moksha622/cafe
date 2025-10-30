import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("⚠️ Please fill all fields before sending.");
      return;
    }
    setStatus("✅ Message sent successfully! ☕ Thank you for contacting us.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      className="contact-page"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/beans.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "rgba(0,0,0,0.5)",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Header Banner */}
      <div
        className="contact-banner"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/contact-bg.jpg)`,
        }}
      >
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Get in touch with Jill’s Café today.</p>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info-container">
        <div className="info-card">
          <img
            src={process.env.PUBLIC_URL + "/images/location.jpg"}
            alt="Location"
          />
          <h3>Visit Us</h3>
          <p>
            Jill’s Café, No. 42 Coffee Street,
            <br /> Colombo 05, Sri Lanka
          </p>
        </div>

        <div className="info-card">
          <img src={process.env.PUBLIC_URL + "/images/phone.png"} alt="Phone" />
          <h3>Call Us</h3>
          <p>
            +94 77 456 7890
            <br /> +94 11 222 3344
          </p>
        </div>

        <div className="info-card">
          <img src={process.env.PUBLIC_URL + "/images/email.jpeg"} alt="Email" />
          <h3>Email Us</h3>
          <p>
            hello@jillscafe.lk
            <br /> support@jillscafe.lk
          </p>
        </div>

        <div className="info-card">
          <img src={process.env.PUBLIC_URL + "/images/clock.png"} alt="Hours" />
          <h3>Opening Hours</h3>
          <p>
            Monday – Friday: 7:00 AM – 9:00 PM
            <br />
            Saturday – Sunday: 8:00 AM – 10:00 PM
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <h2>Send Us a Message</h2>
        <p>
          Have a question, feedback, or special request? Drop us a message
          below!
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>

      {/* Google Map Embed */}
      <div className="map-container">
        <iframe
          title="Jill's Café Location"
          src="https://www.google.com/maps?q=colombo%2005%20sri%20lanka&output=embed"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
