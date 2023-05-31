import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar" style={{ position: 'fixed', top: 0, width: '100%' }}>
      <ul className="navbar-list">
        <li className="navbar-item navbar-logo">
          <a className="navbar-link" href="/">Altiro</a>
        </li>
        <li className="navbar-item" style={{ marginRight: '20px' }}>
          <a className="navbar-link" href="/">Home</a>
        </li>
        <li className="navbar-item" style={{ marginRight: '20px' }}>
          <a className="navbar-link" href="/services">Services</a>
        </li>
        <li className="navbar-item" style={{ marginRight: '20px' }}>
          <a className="navbar-link" href="/about">About Us</a>
        </li>
        <li className="navbar-button" style={{ marginRight: '20px' }}>
          <a className="navbar-link" href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
