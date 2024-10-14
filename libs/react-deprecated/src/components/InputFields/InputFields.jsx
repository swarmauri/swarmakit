import React from 'react';
import PropTypes from 'prop-types';
import './InputFields.css';

const InputFields = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className="input-field"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

InputFields.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'email']),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

InputFields.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
  onChange: () => {},
};

export default InputFields;