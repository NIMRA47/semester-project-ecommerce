import React, { useState, useEffect } from 'react';
import './App.css';
export default function ShopVibe() {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="page">
      {/* Nav */}
      <nav className="nav container">
        <img className="logo" src="logo2.jpg" alt="Logo" />
        
        <button onClick={() => setMenu(!menu)} className="menubtn d-md-none">
          <i className="fas fa-bars"></i>
        </button>

        <div className={menu ? 'links show' : 'links d-none d-md-block'}>
          {menu && <img className="logo2" src="log.png" alt="Logo" />}
          <ul className="list d-flex flex-column flex-md-row gap-4 mb-0">
            <li><a href="#" className="text-white text-decoration-none">Home</a></li>
            <li><a href="#" className="text-white text-decoration-none">Shop</a></li>
            <li><a href="#" className="text-white text-decoration-none">Deals</a></li>
            <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
          </ul>
        </div>
      </nav>
      {}
      <section className="hero text-center mt-4">
        <div className="head d-flex justify-content-center align-items-start mx-auto">
          
          <h1 className="title text-white mx-3">
            Your Ultimate<br />Shopping Destination
          </h1>
          <img src="https://framerusercontent.com/images/KGLN0goP1I1gJpW1maFpw5fLbro.png" className="icon" alt="" />
        </div>
      </section>

      {/* Badge Section */}
      <div className="main position-relative my-5">
        <div className="container">
          <img src="https://framerusercontent.com/images/WKm6wkD8sC7KHRWG3NTesGsQuMY.png" alt="Left" className="leftimg d-none d-lg-block" />
          
          <div className="badge mx-auto">
            <h2 className="big mb-1">5M+</h2>
            <p className="text text-center">HAPPY<br />CUSTOMERS</p>
            <img className="pig" src="https://framerusercontent.com/images/AyaqT7BGNRWWnVtczZnGioxrw54.png" alt="Cart" />
          </div>

          <img src="https://framerusercontent.com/images/Fhi3itZrAMA51gprPglMj1PldI.png" alt="Right" className="rightimg d-none d-lg-block" />
        </div>
      </div>

      {/* Stats */}
      <div className="container">
        <div className="row g-3 stats">
          {[
            { num: '10K+', label: 'Products' },
            { num: '500+', label: 'Brands' },
            { num: '1M+', label: 'Orders Delivered' },
            { num: '24/7', label: 'Support' }
          ].map((stat, i) => (
            <div key={i} className="col-6 col-md-3">
              <div className="stat text-center p-3">
                <p className="num mb-1">{stat.num}</p>
                <p className="label mb-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Categories */}
      <section className="games my-5">
        <div className="container-fluid px-3">
          <div className="row align-items-center g-4 content-wrapper">
            <div className="col-md-3 d-none d-md-block">
              <img src="https://framerusercontent.com/images/c5lV4frYDfwTraZFs1muC8qyt4A.png" alt="Art" className="w-100" />
            </div>

            <div className="col-md-6">
              <div className="content text-center text-white">
                <div className="top d-flex align-items-center justify-content-center gap-2 mb-3">
                  <img className="small" src="https://framerusercontent.com/images/ks5NuJoYi15bKTTAFxI8okzsM.png" alt="" />
                  <h3 className="htitle mb-0">Explore Our Collection</h3>
                  <img className="small" src="https://framerusercontent.com/images/eUlSE4JF5VSzjznmp7QSjtNe0M.png" alt="" />
                </div>
                <p className="desc mb-4">
                  From trending fashion to cutting-edge electronics, discover everything you need in one place with unbeatable prices.
                </p>
                <div className="tags d-flex flex-wrap justify-content-center gap-2">
                  {['Fashion', 'Electronics', 'Home & Living', 'Beauty', 'Sports', 'Kids', 'Books', 'Accessories'].map((cat) => (
                    <span key={cat} className="tag">{cat}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-3 d-none d-md-block">
              <img src="https://framerusercontent.com/images/xwij7sIMV3ThSLrjMslzffYxhw.png" alt="Art" className="w-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Icon */}
      <div className="center text-center my-5">
        <img src="https://framerusercontent.com/images/39fZAeahZloAfU4NgP9v3byXec.png" alt="Icon" className="midicon" />
      </div>

      {/* Why Shop With Us */}
      <div className="container my-5">
        <div className="row g-4 partner">
          <div className="col-lg-7">
            <div className="box p-4 p-md-5">
              <h2 className="btitle text-white mb-4">
                Why Shop With Us – Quality Meets Affordability
              </h2>
              <p className="bdesc">
                We bring you authentic products from trusted brands at prices you'll love. Fast shipping, easy returns, and customer satisfaction guaranteed every time you shop.
              </p>
            </div>
          </div>
          <div className="col-lg-5 d-flex justify-content-end align-items-start">
            <img src="right-birds.avif" alt="Shopping" className="bird" />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container my-5">
        <div className="row g-3 grid">
          {[
            {
              img: 'arrowcircleup.png',
              title: 'Free & Fast Shipping',
              desc: 'Get your orders delivered to your doorstep within 2-5 days. Free shipping on orders above $50. Track your package in real-time.'
            },
            {
              img: 'bolt.png',
              title: 'Secure Payment Options',
              desc: 'Shop with confidence using our encrypted payment gateway. We accept all major credit cards, debit cards, and digital wallets.'
            },
            {
              img: 'thirdchildimg.png',
              title: 'Easy Returns & Refunds',
              desc: 'Not satisfied? Return within 30 days for a full refund. No questions asked. Your satisfaction is our priority.'
            }
          ].map((item, i) => (
            <div key={i} className="col-md-4">
              <div className="card p-4">
                <div className="circle ms-auto mb-3">
                  <img src={item.img} alt="" className="cardimg" />
                </div>
                <h3 className="ctitle text-white mb-3">{item.title}</h3>
                <p className="cdesc mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="container my-5">
        <div className="growth p-4 p-md-5">
          <div className="row g-4 align-items-start">
            <div className="col-lg-9">
              <h2 className="gtitle text-white mb-4">
                Trusted by Millions - See What Our Customers Say
              </h2>
              <p className="gdesc">
                Join over 5 million happy shoppers who trust us for quality products, amazing deals, and exceptional service. Your next favorite purchase is just a click away!
              </p>
            </div>
            <div className="col-lg-3 d-flex justify-content-end">
              <img src="growthpic.png" alt="Reviews" className="gimg" />
            </div>
          </div>
        </div>
      </div>

  
    </div>
  );
}