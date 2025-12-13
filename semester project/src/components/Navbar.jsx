import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <nav className={`navbar ${animate ? 'animate' : ''}`}>
      <img className="logo" src="logo2.jpg" alt="Logo" />
      
      <div className="nav-links">
        

        <ul className="menu-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
