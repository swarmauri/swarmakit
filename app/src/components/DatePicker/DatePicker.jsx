import React from 'react';
import PropTypes from 'prop-types';
import './DatePicker.css';

const DatePicker = ({ selectedDate, onChange, minDate, maxDate, disabled }) => {
  const handleDateChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="date"
      className="date-picker"
      value={selectedDate}
      onChange={handleDateChange}
      min={minDate}
      max={maxDate}
      disabled={disabled}
    />
  );
};

DatePicker.propTypes = {
  selectedDate: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  disabled: PropTypes.bool,
};

DatePicker.defaultProps = {
  minDate: '',
  maxDate: '',
  disabled: false,
};

export default DatePicker;