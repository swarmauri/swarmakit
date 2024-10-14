import React from 'react';
import PropTypes from 'prop-types';
import './DatePicker.css';

const DatePicker = ({ type, selectedDate, onSelect, disabled }) => {
  return (
    <div className={`date-picker ${disabled ? 'disabled' : ''}`}>
      <input
        type={type === 'time' ? 'time' : 'date'}
        value={selectedDate}
        onChange={(e) => !disabled && onSelect(e.target.value)}
        disabled={disabled}
      />
    </div>
  );
};

DatePicker.propTypes = {
  type: PropTypes.oneOf(['single', 'range', 'time']),
  selectedDate: PropTypes.string,
  onSelect: PropTypes.func,
  disabled: PropTypes.bool,
};

DatePicker.defaultProps = {
  type: 'single',
  selectedDate: '',
  onSelect: () => {},
  disabled: false,
};

export default DatePicker;