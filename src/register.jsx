import React from "react";
import "./register.css";
import { useContext ,useState} from "react";
import { MyContext } from "./App";
import { Link } from "react-router-dom";
import  axios  from "axios";
import { useNavigate } from "react-router-dom"; 
function Register() {
  const earning=0
const { name, setname } = useContext(MyContext);
const { password, setpassword} = useContext(MyContext);
const { email, setemail} = useContext(MyContext);
// const { , setpassword} = useContext(MyContext);
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/register", {
        name,
        email,
        password,
        earning
      });
      console.log("Server Response:", res.data);
     
      // Navigate to home after successful registration
      navigate("/home");
    } catch (err) {
      console.error("Registration Error:", err);
      alert("Registration failed(may be email already exists)");
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-box">
        <h1 className="brand-title">SmartPick Deals</h1>
        <h3 className="register-heading">Create Your Account</h3>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" value={name} onChange={(e)=>setname(e.target.value)} />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" onChange={(e)=>setemail(e.target.value)} />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Create password"  value={password} onChange={(e)=>setpassword(e.target.value)}/>
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm password" />
          </div>

  <button className="register-btn" type="submit">
            Register
          </button>
          <p className="extra-links">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;