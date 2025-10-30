import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  const navigate = useNavigate();

  return (
    <div
      className="signin-wrapper"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/coffee-bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="signin-overlay"></div>
      <div className="signin-container">
        <h2>Create Your Account</h2>
        <form className="signin-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="signin-submit">
            Sign Up
          </button>
        </form>

        <p className="signin-text">
          Already have an account?{" "}
          <button className="link-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
