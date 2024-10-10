import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MaskedInput.css';

const MaskedInput = ({ mask, value, onChange, disabled }) => {
  const [isMasked, setIsMasked] = useState(true);

  const toggleMask = () => {
    setIsMasked(!isMasked);
  };

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="masked-input-container">
      <input
        className="masked-input"
        type={isMasked ? 'password' : 'text'}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
      <button type="button" onClick={toggleMask} disabled={disabled}>
        {isMasked ? 'Show' : 'Hide'}
      </button>
    </div>
  );
};

MaskedInput.propTypes = {
  mask: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

MaskedInput.defaultProps = {
  mask: true,
  value: '',
  onChange: () => {},
  disabled: false,
};

export default MaskedInput;