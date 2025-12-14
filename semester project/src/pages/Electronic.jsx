import React from "react";
import "../Electronic.css";
import Navbar from "../components/Navbar";

const products = [
  { name: "Smartphone", tagline: "Experience cutting-edge technology!" },
  { name: "Laptop", tagline: "Power and performance for your work and play!" },
  { name: "Headphones", tagline: "Immerse yourself in crystal-clear sound!" },
  { name: "Smart Watch", tagline: "Stay connected and track your health!" },
  { name: "Camera", tagline: "Capture every moment in stunning detail!" },
  { name: "Gaming Console", tagline: "Next-level gaming at your fingertips!" },
];

// Define extensions for each product
const imageExtensions = ["jpeg", "jpg", "jpeg", "jpeg", "jpeg", "jpeg"];

const Electronics = () => {
  return (
    <>
 

      <section className="category-hero electronics-hero">
        <h1>Electronics</h1>
        <p>Latest gadgets & smart technology</p>
      </section>

      <section className="products-grid">
        {products.map((product, i) => (
          <div className="product-card" key={i}>
            <div className="product-image">
              <img
                src={`/product/product${i + 1}.${imageExtensions[i]}`}
                alt={product.name}
              />
            </div>
            <h3>{product.name}</h3>
            <p className="tagline">{product.tagline}</p>
            <button>View More</button>
          </div>
        ))}
      </section>
    </>
  );
};
export default Electronics;