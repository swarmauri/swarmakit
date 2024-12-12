import React from 'react';
import './CurrentLocationButton.css';

interface CurrentLocationButtonProps {
  active?: boolean;
  disabled?: boolean;
  searching?: boolean;
  onClick: () => void;
}

const CurrentLocationButton: React.FC<CurrentLocationButtonProps> = ({ active, disabled, searching, onClick }) => {
  return (
    <button
      className={`current-location-button ${active ? 'active' : ''} ${searching ? 'searching' : ''}`}
      disabled={disabled}
      onClick={onClick}
      aria-pressed={active}
      aria-label={searching ? 'Searching for current location' : 'Locate current position'}
    >
      {searching ? '🔍' : '📍'}
    </button>
  );
};

export default CurrentLocationButton;