import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer>
    <p className="footer">All rights reserved {(new Date().getFullYear())} &copy; Koala Holla</p>
  </footer>
);

export default Footer;
