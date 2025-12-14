import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


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
        <li><Link to="/">Home</Link></li>
       
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
