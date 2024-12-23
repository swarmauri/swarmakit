import React from 'react';

interface ToggleSwitchProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked = false, disabled = false, onChange }) => {
  const handleToggle = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <div className={`toggle-switch ${disabled ? 'disabled' : ''}`} onClick={handleToggle} aria-checked={checked} role="switch" aria-disabled={disabled}>
      <div className={`switch ${checked ? 'on' : 'off'}`}></div>
    </div>
  );
};

export default ToggleSwitch;