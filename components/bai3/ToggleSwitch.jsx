import React, { useState } from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={`toggle-switch ${isOn ? 'on' : 'off'}`} onClick={handleToggle}>
      <div className="toggle-slider"></div>
      <span className="toggle-text">{isOn ? 'ON' : 'OFF'}</span>
    </div>
  );
};

export default ToggleSwitch;