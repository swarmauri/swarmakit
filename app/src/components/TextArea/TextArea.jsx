import React from 'react';
import PropTypes from 'prop-types';
import './Textarea.css';

const Textarea = ({ value, onChange, disabled }) => {
  return (
    <textarea
      className={`custom-textarea ${disabled ? 'disabled' : ''}`}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

Textarea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

Textarea.defaultProps = {
  value: '',
  onChange: () => {},
  disabled: false,
};

export default Textarea;