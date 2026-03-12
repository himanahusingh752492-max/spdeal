import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { searchname } from "./App"; 
// import { useNavigate } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";

function Body({ pitem }) {
  return (
 
      <Col lg={3} md={6} sm={6} className="mb-4 py-3">
        <Card className="h-100" style={{ border: "1px solid #E5E7EB", borderRadius: "10px", boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)" ,backgroundColor:"#FFFFFF"}}>
          <Card.Img
            variant="top" style={{ width: "280px", borderRadius: "10px 10px 0 0",margin: "10px auto 0 auto",display: "block", padding: "0",   height: "230px"}}
           src={pitem.link}
        />
       <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
  <div>
    <Card.Title style={{ color: "#1F2937", marginBottom: "10px" ,fontSize:"16px" }}>{pitem.kind}</Card.Title>
   
  </div>

  <div style={{ display: "flex", gap: "10px" , flexDirection:"column" }}>
     <div style={{ display: "flex", gap: "20px", marginBottom: "15px" }}>
      <Card.Text style={{ color: "#F97316", fontWeight: "bold", flex: 1 }}>{pitem.pricea}</Card.Text>
      <Card.Text style={{ color: "#F97316", fontWeight: "bold", flex: 1 }}>{pitem.pricef}</Card.Text>
    </div>
    {/* <div style={{display:"flex"}} */}
    <div style={{ display: "flex", gap: "10px" }}>
      <Button
        variant="primary"
        href={pitem.href}
        style={{ flex: 1, backgroundColor: "#F97316", padding: "8px 0" }}
      >
        Buy on Amazon
      </Button>

      <Button
        variant="primary"
        style={{ flex: 1, backgroundColor: "#F97316", padding: "8px 0" }}
      >
        Buy on Flipkart
      </Button>
    </div>
    </div>
</Card.Body>
      </Card>
    </Col>

  );
}

export default Body;
