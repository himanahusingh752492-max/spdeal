import React from "react";
import { useParams } from "react-router-dom";
import  ProductDetail from "./detailPage";
import { blog } from "./blog";

function ProductDetailWrapper() {
  const { id } = useParams();
  const product = blog.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return <ProductDetail product={product} />;
}

export default ProductDetailWrapper;