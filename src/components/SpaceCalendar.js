import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import SpaceCalendarCSS from './SpaceCalendar.module.css';

function SpaceCalendar() {
  return (
    <div className={SpaceCalendarCSS.SpaceCalendar}>
      <Navbar />
      <h1>Hello World!</h1>
      <Footer />
    </div>
  );
}

export default SpaceCalendar;
