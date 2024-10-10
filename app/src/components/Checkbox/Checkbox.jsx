import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

const Checkbox = ({ checked, disabled, onChange }) => {
  return (
    <label className={`checkbox ${disabled ? 'disabled' : ''}`}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className="checkbox-input"
      />
      <span className="checkbox-custom"></span>
    </label>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  onChange: () => {},
};

export default Checkbox;