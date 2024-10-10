// FormInputs.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './FormInputs.css';

const FormInputs = ({ labelText, inputType, placeholderText, isRequired }) => {
  return (
    <div className="form-input">
      <label className="form-label">{labelText}</label>
      <input
        type={inputType}
        placeholder={placeholderText}
        required={isRequired}
        className="form-input-field"
      />
    </div>
  );
};

FormInputs.propTypes = {
  labelText: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(['text', 'email', 'password', 'number']).isRequired,
  placeholderText: PropTypes.string,
  isRequired: PropTypes.bool,
};

FormInputs.defaultProps = {
  placeholderText: '',
  isRequired: false,
};

export default FormInputs;