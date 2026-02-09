import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Body({ pitem }) {
  return (
    <Col lg={3} md={6} sm={12} className="mb-4 py-3" >
      <Card className="h-100">
        <Card.Img
          variant="top"
       src={pitem.link}
        />
        <Card.Body>
          <Card.Title>{pitem.kind}</Card.Title>
          <div style={{display:"flex"}}> <Card.Text style={{padding:"0px", width:"100px",gap:"10px",marginRight: "70px"}}>{pitem.pricea}</Card.Text>
          <Card.Text style={{padding:"0px", width:"100px",gap:"10px"}}>{pitem.pricef}</Card.Text></div>
         
          <Button variant="primary" href={pitem.href} style={{padding:"0px", width:"100px" ,marginRight: "70px"}}>Buy on amazone</Button>

          <Button variant="primary" style={{padding:"0px", width:"100px",gap:"10px"}}>Buy on flipkart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Body;
