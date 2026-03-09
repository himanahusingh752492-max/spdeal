import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { handleSearch, searchname } from "./App";
import { useContext } from "react";
import { MyContext } from "./App";
function Header() {
  const { name, setname } = useContext(MyContext);
  const [ name1, setname1 ] = useState('');
  const { password, setpassword } = useContext(MyContext);
   const { email, setemail} = useContext(MyContext);
// useEffect(() => {
//   const fetchUser = async () => {
//     try {
//       const res = await fetch("http://localhost:4000/login", { credentials: "include" });

//       const contentType = res.headers.get("content-type");
//       if (!contentType || !contentType.includes("application/json")) {
//         throw new Error("Server did not return JSON");
//       }

//       const user = await res.json();
//       setname1(user?.name || "Guest");
//     } catch (err) {
//       console.log("Error fetching user:", err);
//       setname1("Guest");
//     }
//   };

//   fetchUser();
// }, []);
  const [value, setvalue] = useState("");
  const navigate = useNavigate();
 
  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to /search page with query parameter
    if (value.trim() !== "" || value.trim()) {
      navigate(`/search?query=${encodeURIComponent(value)}`);

    }
  };

  // Wrapper for entire header
  const wrap = {
    display: "flex",
    flexWrap: "wrap",
    position: "relative",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#0f172a",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    boxSizing: "border-box",
  };

  // Individual link style
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    padding: "5px 10px",
    transition: "color 0.3s",
  };

  // Navigation container
  const navStyle = {
    display: "flex",
    width: "100%",
    backgroundColor: "#1e293b", // you can change it to match your theme
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: "10px 20px",
    boxSizing: "border-box",
    borderRadius: "10px",
  };
  const searchStyle = {
    backgroundColor: "#1e293b",
  };
  const logout = async () => {

await fetch("http://localhost:4000/logout",{
 credentials:"include"
})

navigate("/login");

}
  return (
    <div style={wrap}>
      <h2 style={linkStyle}>SmartPick Deals-  <span style={{ color: "#facc15", fontSize: "25px", }} >Welcome,{name1}! </span></h2>
      <div style={{ width: "400px" }}>   <form onSubmit={handleSearch}><input type="search" name="search" id="search" value={value} onChange={(e) => setvalue(e.target.value)} placeholder="Search..." style={{ ...searchStyle, padding: "5px 10px", borderRadius: "5px 0 0 5px", border: "1px solid black", width: "80%" }} /> <input type="submit" value="Search" style={{ ...searchStyle, padding: "5px 10px", borderRadius: "0 5px 5px 0", border: "1px solid black", color: "white", backgroundColor: "#04060bff" }} /> </form></div>
      {/* Navigation */}

      <div style={navStyle}>
        <nav style={{ display: "flex", gap: "240px", flexWrap: "wrap" }}>
          <Link style={linkStyle} to="/home">Home</Link>
          <Link style={linkStyle} to="/review">Reviews</Link>
          <Link style={linkStyle} to="/top">Top Deals</Link>
          <Link style={linkStyle} to="/contact">Contact</Link>
       <a href="#" style={linkStyle} onClick={logout}>
  Logout
</a>
        </nav>
      </div>
    </div>
  );
}

export default Header;