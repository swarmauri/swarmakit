import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DateRangePicker.css';

const DateRangePicker = ({ onDateRangeChange }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);
    onDateRangeChange({ startDate: newStartDate, endDate });
  };

  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;
    setEndDate(newEndDate);
    onDateRangeChange({ startDate, endDate: newEndDate });
  };

  return (
    <div className="date-range-picker">
      <input
        type="date"
        value={startDate}
        onChange={handleStartDateChange}
        className="date-input"
      />
      <span className="date-separator">to</span>
      <input
        type="date"
        value={endDate}
        onChange={handleEndDateChange}
        className="date-input"
      />
    </div>
  );
};

DateRangePicker.propTypes = {
  onDateRangeChange: PropTypes.func.isRequired,
};

export default DateRangePicker;