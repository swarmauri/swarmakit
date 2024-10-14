import React from 'react';
import PropTypes from 'prop-types';
import './ToggleSwitch.css';

const ToggleSwitch = ({ isOn, handleToggle, disabled }) => {
  return (
    <div className={`toggle-switch ${disabled ? 'disabled' : ''}`}>
      <input
        className="toggle-switch-checkbox"
        type="checkbox"
        checked={isOn}
        onChange={handleToggle}
        disabled={disabled}
        id={`toggle-switch`}
      />
      <label
        className="toggle-switch-label"
        htmlFor={`toggle-switch`}
      >
        <span className={`toggle-switch-inner`} />
        <span className={`toggle-switch-switch`} />
      </label>
    </div>
  );
};

ToggleSwitch.propTypes = {
  isOn: PropTypes.bool,
  handleToggle: PropTypes.func,
  disabled: PropTypes.bool,
};

ToggleSwitch.defaultProps = {
  isOn: false,
  handleToggle: () => {},
  disabled: false,
};

export default ToggleSwitch;