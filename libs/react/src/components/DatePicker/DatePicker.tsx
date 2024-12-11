import React, { ChangeEvent } from 'react';

interface DatePickerProps {
  date: string;
  disabled?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: 'date' | 'datetime-local';
}

const DatePicker: React.FC<DatePickerProps> = ({ date, disabled = false, onChange, type }) => {
  return (
    <input
      type={type}
      value={date}
      disabled={disabled}
      onChange={onChange}
      aria-label="Date Picker"
      aria-disabled={disabled}
      className="date-picker"
    />
  );
};

export default DatePicker;