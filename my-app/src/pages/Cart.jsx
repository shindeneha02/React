import { useEffect, useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCart);
  }, []);

  if (cartItems.length === 0) return <h3>Your cart is empty</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index} style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>
          <img src={item.image} alt={item.title} style={{ width: "80px" }} />
          <h4>{item.title}</h4>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
}
