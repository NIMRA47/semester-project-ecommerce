import React from "react";
import "./Fashion.css";
import "../App.css"; // path may vary depending on your folder structure

import Navbar from "../components/Navbar";

// Product data
const products = [
  { name: "T-Shirt", tagline: "Trendy and comfortable!" },
  { name: "Jeans", tagline: "Perfect fit for all occasions!" },
  { name: "Sneakers", tagline: "Step up your style!" },
  { name: "Jacket", tagline: "Stay warm and fashionable!" },
  { name: "Handbag", tagline: "Carry in style!" },
  { name: "Watch", tagline: "Timeless elegance!" },
];

const Fashion = () => {
  return (
    <>
    

      {/* Hero Section */}
      <section className="category-hero fashion-hero">
        <h1>Fashion</h1>
        <p>Trendy clothing & accessories</p>
      </section>

      {/* Products Grid */}
      <section className="products-grid">
        {products.map((product, i) => (
          <div className="product-card" key={i}>
            {/* Image Section */}
            <div className="product-image">
              <img
          src={`/product/fashion/fashion${i + 1}.jpeg`}
                alt={product.name}
              />
            </div>

            {/* Product Details */}
            <h3>{product.name}</h3>
            <p className="tagline">{product.tagline}</p>
            <button>View More</button>
          </div>
        ))}
      </section>
    </>
  );
};

export default Fashion;