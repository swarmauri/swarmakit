import React from 'react';

interface VisualCueForAccessibilityFocusIndicatorProps {
  isFocused: boolean;
  onFocusChange?: () => void;
}

const VisualCueForAccessibilityFocusIndicator: React.FC<VisualCueForAccessibilityFocusIndicatorProps> = ({ isFocused, onFocusChange }) => {
  const handleFocusChange = () => {
    if (onFocusChange) {
      onFocusChange();
    }
  };

  return (
    <div
      className={`focus-indicator ${isFocused ? 'focused' : 'unfocused'}`}
      tabIndex={0}
      onFocus={handleFocusChange}
      onBlur={handleFocusChange}
      role="button"
      aria-pressed={isFocused}
    >
      {isFocused ? 'Focused' : 'Unfocused'}
    </div>
  );
};

export default VisualCueForAccessibilityFocusIndicator;