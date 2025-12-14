import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./categories.css";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <>
     

      <section className="categories-page">
        <h1>Shop by Category</h1>
        <p>Choose your favorite category</p>

        <div className="categories-container">
          {/* Electronics Category */}
          <div 
            className="category-box electronics-box"
            onClick={() => navigate('/electronics')}
          >
            <div className="category-content">
              <h2>Electronics</h2>
              <p>Latest gadgets & smart technology</p>
              <button>Explore Electronics</button>
            </div>
          </div>

          {/* Fashion Category */}
          <div 
            className="category-box fashion-box"
            onClick={() => navigate('/fashion')}
          >
            <div className="category-content">
              <h2>Fashion</h2>
              <p>Trendy clothing & accessories</p>
              <button>Explore Fashion</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;