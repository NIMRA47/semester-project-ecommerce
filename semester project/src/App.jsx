import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import "./App.css";

import Navbar from './components/Navbar';
import Contact from './pages/contact';
import Electronics from './pages/Electronic';
import Fashion from './pages/Fashion';
import Categories from './pages/categories';

const HomePage = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate(); // Now this works!

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      <section className={`sct ${animate ? 'animate' : ''}`}>
        <div className="heading-container">
          <h1>
            Leading Ecommerce Solutions<br />
            for Your Business
          </h1>
        </div>
      </section>

      <img
        src="https://framerusercontent.com/images/WKm6wkD8sC7KHRWG3NTesGsQuMY.png"
        alt="Left Banner"
        className={`side-image left-image ${animate ? 'animate' : ''}`}
      />

      <div className="homepage-container">
        <div className="inside-container">
          <div className="badge">
            <h1>10K+</h1>
            <p>Products Sold</p>
            <img
              className="circlepic"
              src="https://framerusercontent.com/images/AyaqT7BGNRWWnVtczZnGioxrw54.png"
              alt="Cartoon Icon"
            />
          </div>
        </div>
      </div>

      <img
        src="https://framerusercontent.com/images/Fhi3itZrAMA51gprPglMj1PldI.png"
        alt="Right Banner"
        className={`side-image right-image ${animate ? 'animate' : ''}`}
      />

      <section className="game-section">
        <div className="side-img left">
          <img src="leftpic.jpg" alt="Left Art" />
        </div>

        <div className="content">
          <h3 className="section-title">
            Explore Our Product Categories
          </h3>

          <div className="categories">
            <button onClick={() => navigate('/electronics')}><span>Electronics</span></button>
            <button onClick={() => navigate('/fashion')}><span>Fashion</span></button>
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
<h1>Our Stocking Suffer  Picks</h1>
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

const EcommerceHome = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/fashion' element={<Fashion />} />
        <Route path="/contact" element={<Contact />} />
<Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
};

export default EcommerceHome;  