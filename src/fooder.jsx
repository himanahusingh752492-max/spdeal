import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { handleSearch, searchname } from "./App";

function Header() {

  const [value,setvalue]=useState("");
  const navigate = useNavigate();
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to /search page with query parameter
   if(value.trim() !==""|| value.trim()) {
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
    borderRadius:"10px",
  };
  const searchStyle = {
   backgroundColor: "#1e293b",  
  };
  return (
    <div style={wrap}>
      <h2 style={linkStyle}>SmartPick Deals</h2>
       <div style={{width: "400px"}}>   <form onSubmit={handleSearch}><input type="search"  name="search" id="search" value={value}     onChange={(e) => setvalue(e.target.value)} placeholder="Search..." style={{...searchStyle, padding: "5px 10px", borderRadius: "5px 0 0 5px", border: "1px solid black",width: "80%"}}/> <input type="submit" value="Search" style={{...searchStyle, padding: "5px 10px", borderRadius: "0 5px 5px 0", border: "1px solid black",color: "white",backgroundColor: "#04060bff"  }} /> </form></div>
      {/* Navigation */}
      
      <div style={navStyle}>
        <nav style={{ display: "flex", gap: "240px", flexWrap: "wrap"  }}>
          <a style={linkStyle} href="/home">Home</a>
          <a style={linkStyle} href="/review">Reviews</a>
          <a style={linkStyle} href="/top">Top Deals</a>
          <a style={linkStyle} href="/contact">Contact</a>
          <a style={linkStyle} href="/login">Logout</a>
        </nav>
      </div>
    </div>
  );
}

export default Header;