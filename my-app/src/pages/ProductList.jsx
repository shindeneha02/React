// src/pages/Products.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const router = useNavigate();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => router(`/single-product/${product.id}`)}
          style={{
            cursor: "pointer",
            width: "250px",
            padding: "10px",
            margin: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{ height: "200px", width: "100%", objectFit: "contain" }}
          />
          <h2 style={{ fontSize: "16px" }}>{product.title}</h2>
          <h3 style={{ color: "green" }}>Price: ${product.price}</h3>
        </div>
      ))}
    </div>
  );
};

export default Products;
