
import React from "react";

function Header() {
  const linkStyle = {
    color: "white",
    marginLeft: "15px",
    textDecoration: "none",
    fontWeight: "bold",

    //  flexWrap: "wrap",
     
    
  };
const wrap={
      display:"flex",
     flexWrap: "wrap",
     position:"relative",

   

}
  
  const navStyle = {
    ...linkStyle,
    // flexWrap: "wrap",
    marginTop: "-5px",
  
    position:"relative",
    top:"20px",
    right:"-810px",
   
    
    

  };


  return (
    <div style={wrap}>
      <h2 style={linkStyle}>SmartPick Deals</h2>

  
      {/* Navigation */}
      <div style={navStyle} >
        <nav>
          <a style={linkStyle} href="/home" >Home</a>
          <a style={linkStyle } href="#">Reviews</a>
          <a style={linkStyle} href="/top">Top Deals</a>
          <a style={linkStyle} href="/contact.html">Contact</a>
          <a style={linkStyle} href="/index1.html">Logout</a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
