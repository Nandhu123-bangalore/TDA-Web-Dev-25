import React, { useState } from 'react';
import './toggleswitch.css';

function ToggleSwitch() {
    const [isOn, setIsOn] = useState(false);

    const handleToggleSwitch = () => {
    setIsOn(!isOn); 
    };

  return (
    <div className="toggle-switch" onClick={handleToggleSwitch}>  
      <div className="switch">
        <span class="switch-state">{isOn ? "ON" : "OFF"}</span>
      </div>
    </div>
  );
}

export default ToggleSwitch;