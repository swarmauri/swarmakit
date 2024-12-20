import React, { ChangeEvent } from 'react';

interface DateAndTimePickerProps {
  dateTime: string;
  disabled?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: 'datetime-local';
}

const DateAndTimePicker: React.FC<DateAndTimePickerProps> = ({ dateTime, disabled = false, onChange, type }) => {
  return (
    <input
      type={type}
      value={dateTime}
      disabled={disabled}
      onChange={onChange}
      aria-label="Date and Time Picker"
      aria-disabled={disabled}
      className="date-time-picker"
    />
  );
};

export default DateAndTimePicker;