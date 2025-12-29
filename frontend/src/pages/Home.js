import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="fk-banner">
        <div>
          <h1>Automotive Parts Store</h1>
          <p>
            Buy genuine car spare parts, accessories and components
            with guaranteed quality.
          </p>
          <Link to="/products" className="fk-btn">
            Explore Products
          </Link>
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Shop by Category</h2>

        <div className="fk-category-grid">
          <div className="fk-category-card">Brake System</div>
          <div className="fk-category-card">Engine Parts</div>
          <div className="fk-category-card">Batteries</div>
          <div className="fk-category-card">Car Accessories</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
