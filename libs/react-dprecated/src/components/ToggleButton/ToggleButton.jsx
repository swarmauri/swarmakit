import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ToggleButton.css';

const ToggleButton = ({ labelOn, labelOff, onToggle }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    const newToggleState = !isToggled;
    setIsToggled(newToggleState);
    onToggle(newToggleState);
  };

  return (
    <button className={`toggle-button ${isToggled ? 'toggled' : ''}`} onClick={handleToggle}>
      {isToggled ? labelOn : labelOff}
    </button>
  );
};

ToggleButton.propTypes = {
  labelOn: PropTypes.string.isRequired,
  labelOff: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default ToggleButton;