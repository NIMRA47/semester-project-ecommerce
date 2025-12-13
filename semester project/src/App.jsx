import React, { useState, useEffect } from 'react';

import "./App.css";

import Navbar from './components/Navbar';

const EcommerceHome = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // trigger animation after mount
  }, []);

  return (
    <>
      <Navbar/>
      <section className={`sct  ${animate ? 'animate' : ''}`}>
        <div className="heading-container">
          <h1>Leading Ecommerce Solutions<br />for Your Business</h1>
        </div>
      </section>
      <img src="https://framerusercontent.com/images/WKm6wkD8sC7KHRWG3NTesGsQuMY.png" alt="Left Banner" className={`side-image left-image  ${animate ? 'animate' : ''}`} />
      <div className="homepage-container">
        <div className="inside-container">
          <div className="badge">
            <h1>10K+</h1>
            <p>Products Sold</p>
            <img className="circlepic" src="https://framerusercontent.com/images/AyaqT7BGNRWWnVtczZnGioxrw54.png" alt="Cartoon Icon" />
          </div>
        </div>
      </div>
      <img src="https://framerusercontent.com/images/Fhi3itZrAMA51gprPglMj1PldI.png" alt="Right Banner" className={`side-image right-image ${animate ? 'animate' : ''}`} />
      <div className="stats">
        <div className="stat">
          <p className="number">500+</p>
          <p className="label">Products</p>
        </div>
        <div className="stat">
          <p className="number">120+</p>
          <p className="label">Brands</p>
        </div>
        <div className="stat">
          <p className="number">50K+</p>
          <p className="label">Happy Customers</p>
        </div>
        <div className="stat">
          <p className="number">24/7</p>
          <p className="label">Support</p>
        </div>
      </div>
      <section className="game-section">
        <div className="side-img left">
          <img src="leftpic.jpg" alt="Left Art" />
        </div>
    <div class="content">/
          <div className="inside">
            
            <h3 className="section-title">Explore Our Product Categories</h3>
           
          </div>
         
          <div className="categories">
            <span>Electronics</span>
            <span>Fashion</span>
            <span>Home</span>
            <span>Beauty</span>
           
       
        </div>
</div>
       <div className={`side-img right ${animate ? 'animate' : ''}`}>
          <img src="https://m.media-amazon.com/images/G/01/AmazonExports/Events/2025/HolidayGiftGuide_2025/Fuji_Holiday_Gift_guide_Home_24_Events_Category_tile_Beauty.jpg" alt="Right Art" />
        </div>
      </section>
      
     
        <div className="thirdcontent">
          <img src="image.jpg" alt="" />
          
        </div>
       
   
      <div className="griddiv">
        <div className="onechild gridchild">
          <img className="gridimg gridimg1" src="1stdiv.jpg" alt="" />
            <h1>Customer's most loved</h1>
      <p>These are the products our customers can’t get enough of! Loved for their quality, style, and value, these favorites are tried, tested, and highly recommended.</p>


        </div>
        <div className="secondchild gridchild">
          <img className="gridimg2" src="secondiv.jpg" alt="" />
          <h1>Our Stocking Suffer  Picks</h1>
       <p>Find the perfect little gifts for everyone on your list! Our Stocking Stuffer Picks are fun, affordable, and ready to make the holidays special.</p>


        </div>
        <div className="thirdchild gridchild">
          <img className="thirdchildimg" src="sports.jpg" alt="" />
          <h1>Shop Your Electronics</h1>
         <p>Explore our wide range of electronics, from the latest gadgets to must-have accessories. Shop now to find high-quality products that fit your lifestyle and budget!</p>

        </div>
      </div>
      <div className="growthdiv">
        
          <img src="head.jpg" alt="Growth" />
        </div>
     
    </>
  );
};

export default EcommerceHome;
