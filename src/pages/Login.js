import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div
      className="login-wrapper"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/coffee-cup-bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="login-overlay"></div>
      <div className="login-container">
        <h2>Login to Your Account</h2>
        <form className="login-form">
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="login-submit">
            Login
          </button>
        </form>

        <p className="login-text">
          Don’t have an account?{" "}
          <button className="link-btn" onClick={() => navigate("/signin")}>
            Create one
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
