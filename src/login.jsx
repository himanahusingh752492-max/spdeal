import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./login.css";

import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const submit = async (e) => {
    e.preventDefault(); 
    console.log("Email:",email);
    console.log("Password:", password);
    const r= await fetch("http://localhost:4000/login",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({email,password}), credentials:"include" })

    const res=await r.json()

  if(res.success===true){
    navigate("/home");
  }
  else{
    alert("incorrect Password")
    //  navigate("/register");
  }
   
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h1 className="brand-title">SmartPick Deals</h1>
        <h3 className="login-heading">Login to Your Account</h3>

        <form className="login-form" onSubmit={submit}>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="login-btn" type="submit">Login</button>

          <p className="extra-links">
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;