import React, { ChangeEvent } from 'react';

interface CheckboxProps {
  checked: boolean;
  disabled?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, disabled = false, onChange }) => {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        aria-checked={checked}
        aria-disabled={disabled}
      />
      <span className="checkbox-mark"></span>
    </label>
  );
};

export default Checkbox;