import { Link } from 'react-router-dom';
import React from 'react';
import NavbarCSS from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={NavbarCSS.Navbar}>
      <h1>Navbar</h1>
      <ul className={NavbarCSS.Navbar__list}>
        <li className={NavbarCSS.Navbar__item}>
          <Link className={NavbarCSS.Navbar__link} to="/">Home</Link>
        </li>
        <li className={NavbarCSS.Navbar__item}>
          <Link className={NavbarCSS.Navbar__link} to="/space-calendar">Space Calendar</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
