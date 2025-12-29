import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => setMessage("Failed to load products"));
  }, []);

  const addToCart = (productId, redirect = false) => {
    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("Please login to continue");
      return;
    }

    fetch("http://localhost:5000/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        productId,
        quantity: 1,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        if (redirect) {
          navigate("/cart");
        } else {
          setMessage("Product added to cart");
        }
      })
      .catch(() => setMessage("Error adding to cart"));
  };

  return (
    <div className="container">
      <h2 className="section-title">Available Products</h2>

      {message && <p>{message}</p>}

      <div className="fk-products-grid">
        {products.map((p) => (
          <div key={p.id} className="fk-product-card">
            <img
              src={`https://images.unsplash.com/featured/?car,${p.name}`}
              alt={p.name}
            />

            <div className="fk-product-info">
              <h3>{p.name}</h3>
              <p className="fk-category">{p.category}</p>

              <p className="fk-desc">
                Premium quality {p.name.toLowerCase()} designed for durability
                and high performance.
              </p>

              <div className="fk-price">₹{p.price}</div>

              <button
                className="fk-buy-btn"
                onClick={() => addToCart(p.id, true)}
              >
                Buy Now
              </button>

              <button
                className="fk-add-btn"
                onClick={() => addToCart(p.id)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
