
import React from "react";

function Collection(){
    const style={
      display:"flex",
      position:"relative",
              width: "100%",
              backgroundColor:" #06233fff",
             fontSize:"15px",
               gap: "50px",
                 justifyContent: "space-between",
                 color:"white",
                padding:"10px ",  
                 
                 
    }
    const para={
        margin:"2px",
        backgroundColor:" #06233fff",
        // display:"flex",
        alignItem:"center",
        display:"none",
        
    }
return(
    <div style={{  display:"flex"}}>
    <div style={style} >

        <a href="/phones" style={{textDecoration:"none", color:"white"}}><p id="phones" style={{cursor:"pointer"}}>phone</p></a>
          <a href="/laptops" style={{textDecoration:"none", color:"white"}}><p id="laptop" style={{cursor:"pointer"}}>laptops</p></a>
          <a href="/tv" style={{textDecoration:"none", color:"white"}}><p id="tv" style={{cursor:"pointer"}}>TV</p></a>
          <a href="/ac" style={{textDecoration:"none", color:"white"}}><p id="ac" style={{cursor:"pointer"}}>Air Conditioner</p></a>
          <a href="/electronics" style={{textDecoration:"none", color:"white"}}><p id="elec" style={{cursor:"pointer"}}>Electronics</p></a>

    </div>

<div style={para}>
          <a href="./brandmenu1/Iphone/Iphone.html">Iphones</a> 
  <a href="/samsung">Samsung</a>
  <a href="/vivo">Vivo</a>
  <a href="/motorola">Motorola</a>
  <a href="/oppo">Oppo</a>
  <a href="/infinix">Infinix</a>
  <a href="/poco">Poco</a>
    </div>
</div>


)
}
export default Collection;