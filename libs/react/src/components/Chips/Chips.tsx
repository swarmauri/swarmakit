import React from 'react';

interface ChipProps {
  label: string;
  selectable?: boolean;
  removable?: boolean;
  onRemove?: () => void;
  selected?: boolean;
}

const Chip: React.FC<ChipProps> = ({ label, selectable = false, removable = false, onRemove, selected = false }) => {
  return (
    <div className={`chip ${selectable ? 'selectable' : ''} ${selected ? 'selected' : ''}`}>
      <span>{label}</span>
      {removable && (
        <button aria-label="Remove chip" onClick={onRemove}>
          &times;
        </button>
      )}
    </div>
  );
};

export default Chip;