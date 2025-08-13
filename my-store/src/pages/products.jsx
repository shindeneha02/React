import React, { useEffect, useState } from 'react';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);     // Loading state
  const [error, setError] = useState(null);         // Error state

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Handle loading
  if (loading) {
    return <p>Loading products...</p>;
  }

  // Handle error
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Render products
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            width: '200px',
            textAlign: 'center',
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{ height: '150px', objectFit: 'contain' }}
          />
          <h4 style={{ fontSize: '16px', height: '60px' }}>{product.title}</h4>
          <p><b>${product.price}</b></p>
        </div>
      ))}
    </div>
  );
}

export default Products;
