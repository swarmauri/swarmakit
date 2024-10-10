import React from 'react';
import PropTypes from 'prop-types';
import './ToggleSwitch.css';

const ToggleSwitch = ({ checked, onChange, disabled }) => {
  return (
    <label className={`toggle-switch ${disabled ? 'disabled' : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="slider round"></span>
    </label>
  );
};

ToggleSwitch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

ToggleSwitch.defaultProps = {
  checked: false,
  disabled: false,
};

export default ToggleSwitch;