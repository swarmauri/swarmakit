import React from 'react';

export interface AttachmentIconProps {
  disabled?: boolean;
  onClick?: () => void;
}

const AttachmentIcon: React.FC<AttachmentIconProps> = ({ disabled = false, onClick }) => {
  return (
    <button
      className={`attachment-icon ${disabled ? 'disabled' : 'enabled'}`}
      onClick={onClick}
      disabled={disabled}
      aria-label="Attach file"
    >
      📎
    </button>
  );
};

export default AttachmentIcon;