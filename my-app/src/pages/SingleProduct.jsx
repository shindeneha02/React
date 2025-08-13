import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState({});
  const [quantity, setQuantity] = useState(1);

  const { productId } = useParams();
  const navigate = useNavigate();

  // Fetch single product data
  const getSingleProductData = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      setProductData(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (productId) {
      getSingleProductData();
    }
  }, [productId]);

  // Add to cart function
  const handleAddToCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if product already exists in cart
    const existingItemIndex = storedCart.findIndex(
      (item) => item.id === productData.id
    );

    if (existingItemIndex !== -1) {
      storedCart[existingItemIndex].quantity += quantity;
    } else {
      storedCart.push({ ...productData, quantity });
    }

    localStorage.setItem("cartItems", JSON.stringify(storedCart));
    alert("Product added successfully!");
    navigate("/cart"); // ✅ Ensure route matches App.jsx
  };

  if (loading) return <h3>Loading...</h3>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <img
        src={productData.image}
        alt={productData.title}
        style={{ height: "300px", objectFit: "contain" }}
      />
      <h2>{productData.title}</h2>
      <p>{productData.description}</p>
      <h3 style={{ color: "green" }}>${productData.price}</h3>

      <div style={{ marginTop: "10px" }}>
        <label>
          Quantity:{" "}
          <input
            type="number"
            min="1"
            max="20"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </label>
      </div>

      <button
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          cursor: "pointer",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default SingleProduct;
