import React from 'react';

interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  ariaLabel: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, disabled = false, ariaLabel }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="icon-button"
      aria-label={ariaLabel}
      aria-pressed={disabled}
    >
      {icon}
    </button>
  );
};

export default IconButton;