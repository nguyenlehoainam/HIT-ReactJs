import React, { useState } from 'react';
import './ToggleSwitch.scss';

function ToggleSwitch({ onToggle }) { 
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
    onToggle(); 
  };

  return (
    <div
      className={`toggle-switch ${isOn ? 'on' : 'off'}`}
      onClick={handleToggle}
    >
      <div className="toggle-slider"></div>
      <span className="toggle-text">{isOn ? 'ON' : 'OFF'}</span>
    </div>
  );
}

export default ToggleSwitch;