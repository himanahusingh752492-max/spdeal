import React from "react";
import "./detail.css";

function ProductDetail({ product }) {
  const { kind, pricea, description, link } = product;

  return (
    <div className="product-detail-container">
      <div className="product-image">
        <img src={link} alt={kind} />
      </div>
      <div className="product-info">
        <h2 className="product-name">{kind}</h2>
        <p className="product-price">{pricea}</p>
           <button className="add-to-cart-btn">Add to Cart</button>
        <p className="product-description">{description}</p>
     
      </div>
    </div>
  );
}

export default ProductDetail;