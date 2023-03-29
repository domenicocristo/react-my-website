import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import SpaceCalendarCSS from './SpaceCalendar.module.css';

function SpaceCalendar() {
  const [launchData, setLaunchData] = useState([]);

  useEffect(() => {
    axios.get('https://ll.thespacedevs.com/2.0.0/launch/upcoming')
      .then(response => setLaunchData(response.data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className={SpaceCalendarCSS.SpaceCalendar}>
      <Navbar />
      {launchData.map(launch => (
        <div key={launch.id}>
          <h1>{launch.name}</h1>
          <h3>{new Date(launch.net).toLocaleString('en-GB', { dateStyle: 'short', timeStyle: 'short' }).replace(',', ' |')}</h3>
          <h3>{launch.status.name}</h3>
          <h3>{launch.pad.location.name}</h3>
          <h3>{launch.pad.name}</h3>
          <h3>{launch.launch_service_provider.name}</h3>  
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default SpaceCalendar;