import React from 'react';
import { Link } from 'react-router-dom';
import './calculator.css';

const Header = () => (
  <header className="header">
    <span href="/">
      <Link to="/">Math Magicians</Link>
    </span>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/calculator">Calculator</Link></li>
      <li><Link to="/quote">Quote</Link></li>
    </ul>
  </header>
);

export default Header;
