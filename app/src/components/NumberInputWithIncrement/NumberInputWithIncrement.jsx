import React from 'react';
import PropTypes from 'prop-types';
import './NumberInputWithIncrement.css';

const NumberInputWithIncrement = ({ value, onChange, step, disabled }) => {
  const handleIncrement = () => {
    onChange(value + step);
  };

  const handleDecrement = () => {
    onChange(value - step);
  };

  const handleChange = (e) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="number-input-container">
      <button type="button" onClick={handleDecrement} disabled={disabled}>
        -
      </button>
      <input
        className="number-input"
        type="number"
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
      <button type="button" onClick={handleIncrement} disabled={disabled}>
        +
      </button>
    </div>
  );
};

NumberInputWithIncrement.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  step: PropTypes.number,
  disabled: PropTypes.bool,
};

NumberInputWithIncrement.defaultProps = {
  value: 0,
  onChange: () => {},
  step: 1,
  disabled: false,
};

export default NumberInputWithIncrement;