import React from 'react';
import './style/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Createrfolio</div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/register">Signup</a>
      </div>
    </nav>
  );
};

export default Navbar;
