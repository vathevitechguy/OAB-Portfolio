import React from 'react';
import './Footer.scss';
import { LightBtn } from '../../atoms/Buttons/Buttons';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_wrapper">
        <div className="Footer_CTA">
          <h2>Want to get in touch?</h2>
          <LightBtn>Contact Me</LightBtn>
        </div>
        <div className="Footer_main">
          <div className="Footer_main--wrapper">
            <div className="logo">
              <NavLink to="/">OAB</NavLink>
            </div>
            <div className="footer-items">
              <NavLink to="/#work-categories">View Work</NavLink>
              <NavLink to="personal-blog">Peronal Blog</NavLink>
              <NavLink to="about">About</NavLink>
            </div>
          </div>
          <div className="Footer_main--copyright">
            <span>
              Copyright © 2023. OAB. Designed & Developed by{' '}
              <Link to="https://github.com/vathevitechguy">vathevitechguy</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
