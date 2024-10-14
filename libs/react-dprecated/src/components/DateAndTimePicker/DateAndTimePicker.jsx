import React from 'react';
import PropTypes from 'prop-types';
import './DateAndTimePicker.css';

const DateAndTimePicker = ({ selectedDate, selectedTime, onDateChange, onTimeChange, disabled }) => {
  return (
    <div className={`date-time-picker ${disabled ? 'disabled' : ''}`}>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => !disabled && onDateChange(e.target.value)}
        disabled={disabled}
      />
      <input
        type="time"
        value={selectedTime}
        onChange={(e) => !disabled && onTimeChange(e.target.value)}
        disabled={disabled}
      />
    </div>
  );
};

DateAndTimePicker.propTypes = {
  selectedDate: PropTypes.string,
  selectedTime: PropTypes.string,
  onDateChange: PropTypes.func,
  onTimeChange: PropTypes.func,
  disabled: PropTypes.bool,
};

DateAndTimePicker.defaultProps = {
  selectedDate: '',
  selectedTime: '',
  onDateChange: () => {},
  onTimeChange: () => {},
  disabled: false,
};

export default DateAndTimePicker;