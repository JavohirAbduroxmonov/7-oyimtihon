import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img.svg";
import "./Header.css";


<header>
  <div className="header-logo">
    <div className="header_logo2">
      <img className="img1" src="./GG (2).png" alt="img" />
      <img className="img2" src="Vector (6).png" alt="img" />
      <p className="text-header">+4904-049-950</p>
    </div>
    <div className="header_logo2">
      <p className="text-logo2">Get 50% Off on the Selected items </p>
      <img className="img3" src="./Rectangle 31 (1).png" alt="img" />
      <p className="text-logo3">Shop now</p>
    </div>
    <div className="header_logo3">
      <img className="img5" src={logo} alt="" />
    </div>
    <div className="header_logo4">
      <img className="img6" src="./svg.svg" alt="img" />
    </div>
  </div>
  <nav className="navbar">
    <ul className="header-link">
      <li>
       
        
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "activeLink" : "")}
          to="/products"
        >
          Products
        </NavLink>
      </li>
    </ul>
    <NavLink to="/">
      <div className="cart-icon">
        <FaCartShopping />
        {add > 0 && <span className="cart-count">{add}</span>}
      </div>
    </NavLink>
  </nav>
</header>;
