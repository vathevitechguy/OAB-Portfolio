import React, { useState } from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import { DarkBtn } from '../../atoms/Buttons/Buttons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <NavLink to="/">OAB</NavLink>
        </div>
        <div className={`nav-items ${menuOpen ? 'active' : ''}`}>
          <NavLink to="/" onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="personal-blog" onClick={toggleMenu}>
            Blog
          </NavLink>
          <NavLink to="about" onClick={toggleMenu}>
            About
          </NavLink>
          <NavLink to="/#work-cat" onClick={toggleMenu}>
            <DarkBtn title="View Work" />
          </NavLink>
        </div>
        <div
          className={`menu-toggler ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
