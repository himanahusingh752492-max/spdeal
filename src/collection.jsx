
import React from "react";

function Collection(){
    const style={
      display:"flex",
      position:"absolute",
              width: "100%",
              backgroundColor:" #06233fff",
             fontSize:"15px",
               gap: "50px",
                 justifyContent: "center",
                 color:"white",
                 
                 
    }
    const para={
        margin:"2px",
        backgroundColor:" #06233fff",
        display:"flex",
        alignItem:"center"

 
         


    }
return(
    <div style={{  display:"flex"}}>
    <div style={style} >

          <p id="phones" style={{cursor:"pointer"}}>phone</p>
          <p id="laptop" style={{cursor:"pointer"}}>laptops</p>
          <p id="tv" style={{cursor:"pointer"}}>TV</p>
          <p id="ac" style={{cursor:"pointer"}}>Air Conditioner</p>
          <p id="elec" style={{cursor:"pointer"}}>Electronics</p>
  
    </div>

<div style={para}>
          <a href="./brandmenu1/Iphone/Iphone.html">Iphones</a> 
  <a href="/samsung">Samsung</a>
  <a href="#">Vivo</a>
  <a href="#">Motorola</a>
  <a href="#">Oppo</a>
  <a href="#">Infinix</a>
  <a href="#">Poco</a>
    </div>
</div>


)
}
export default Collection;