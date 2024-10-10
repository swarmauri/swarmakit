import React from 'react';
import PropTypes from 'prop-types';
import './CheckboxButton.css';

const CheckboxButton = ({ label, checked, onChange }) => {
  return (
    <label className="checkbox-button">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="checkbox-input"
      />
      <span className="checkbox-custom"></span>
      {label}
    </label>
  );
};

CheckboxButton.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckboxButton;