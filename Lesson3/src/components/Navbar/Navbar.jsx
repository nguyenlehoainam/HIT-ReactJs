import React from 'react';
import './Navbar.scss';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch.jsx';

function Navbar({ onToggle }) { 
  return (
    <nav>
      <div className="nav-title">eNno</div>
      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Team</li>
        <li>Dropdown</li>
        <li>Contact</li>
        <li>
          <ToggleSwitch onToggle={onToggle} /> 
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;