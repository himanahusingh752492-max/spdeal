import React from "react";
import "./register.css";

function Register() {
  return (
    <div className="register-wrapper">
      <div className="register-box">
        <h1 className="brand-title">SmartPick Deals</h1>
        <h3 className="register-heading">Create Your Account</h3>

        <form className="register-form">
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Create password" />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm password" />
          </div>

          <button className="register-btn">Register</button>

          <p className="extra-links">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;