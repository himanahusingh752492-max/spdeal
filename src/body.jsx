import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Body({ pitem }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${pitem.id}`);
  };

  return (
    <Col xs={6} sm={6} md={4} lg={3} className="mb-4">
      <Card
        className="h-100"
        style={{
          border: "1px solid #E5E7EB",
          borderRadius: "10px",
          boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
          backgroundColor: "#FFFFFF",
          cursor: "pointer"
        }}
        onClick={handleClick}
      >
        <Card.Img
          variant="top"
          src={pitem.link}
          style={{ width: "100%", height: "120px", objectFit: "contain", padding: "8px" }}
        />
        <Card.Body style={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Card.Title style={{
            color: "#1F2937",
            fontSize: "clamp(10px,2vw,14px)",
            marginBottom: "8px",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical"
          }}>
            {pitem.kind}
          </Card.Title>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            <Card.Text className="price-text">{pitem.pricea}</Card.Text>
            <Card.Text className="price-text">{pitem.pricef}</Card.Text>
          </div>
          <div style={{ marginTop: "auto", display: "flex", gap: "5px", justifyContent: "space-between" }}>
            <Button href={pitem.href} style={{ flex: 1, backgroundColor: "#F97316", border: "none", fontSize: "11px", padding: "2px" }} onClick={(e) => e.stopPropagation()}>Amazon</Button>
            <Button style={{ flex: 1, backgroundColor: "#F97316", border: "none", fontSize: "11px", padding: "2px" }} onClick={(e) => e.stopPropagation()}>Flipkart</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Body;