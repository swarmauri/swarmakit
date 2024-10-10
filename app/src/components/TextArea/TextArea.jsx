import React from 'react';
import PropTypes from 'prop-types';
import './TextArea.css';

const TextArea = ({ label, placeholder, value, onChange, rows }) => {
  return (
    <div className="text-area-field">
      {label && <label className="area-label">{label}</label>}
      <textarea
        className="area-text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
      />
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.number,
};

TextArea.defaultProps = {
  rows: 5,
};

export default TextArea;