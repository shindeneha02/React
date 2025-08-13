
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <h3>Loading...</h3>;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate("/cart");
  };

  return (
    <div style={{ padding: "20px" }}>
      <img src={product.image} alt={product.title} style={{ width: "200px" }} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
      <div>
        Quantity:{" "}
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </div>
      <button onClick={handleAddToCart} style={{ marginTop: "10px" }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
