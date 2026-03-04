import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h1 className="brand-title">SmartPick Deals</h1>
        <h3 className="login-heading">Login to Your Account</h3>

        <form className="login-form">
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <button className="login-btn">Login</button>

          <p className="extra-links">
            Don’t have an account? <a href="/register">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;