import { Link } from 'react-router-dom';
import React from 'react';
import NavbarCSS from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={NavbarCSS.Navbar}>
      <Link className={NavbarCSS.Navbar__logo} to="/">Space news</Link>
      <ul className={NavbarCSS.Navbar__list}>
        <li className={NavbarCSS.Navbar__item}>
          <Link className={NavbarCSS.Navbar__link} to="/">Home</Link>
        </li>
        <li className={NavbarCSS.Navbar__item}>
          <Link className={NavbarCSS.Navbar__link} to="/launches">Launches</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
