import React, { useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Phone", price: 30000 },
  { id: 3, name: "Headphones", price: 2000 },
];

export default function ProLi() {
  const [items, setItems] = useState(products);

  const sortByPrice = () => {
    const sorted = [...items].sort((a, b) => a.price - b.price);
    setItems(sorted);
  };

  return (
    <div>
      <h2>Product List</h2>
      <button onClick={sortByPrice}>Sort by Price</button>
      <ul>
        {items.map((p) => (
          <li key={p.id}>
            {p.name} - ₹{p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
