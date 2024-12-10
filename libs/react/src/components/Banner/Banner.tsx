import React, { useState } from 'react';

interface BannerProps {
  state: 'displayed' | 'hidden' | 'withCTA' | 'dismissed';
  message: string;
  ctaLabel?: string;
  onDismiss?: () => void;
  onCTAClick?: () => void;
}

const Banner: React.FC<BannerProps> = ({ state, message, ctaLabel, onDismiss, onCTAClick }) => {
  const [isDismissed, setIsDismissed] = useState(state === 'dismissed');

  const handleDismiss = () => {
    setIsDismissed(true);
    if (onDismiss) onDismiss();
  };

  return (
    <div
      className={`banner ${state}`}
      role="alert"
      aria-hidden={state === 'hidden' || isDismissed}
    >
      <p>{message}</p>
      {state === 'withCTA' && ctaLabel && (
        <button onClick={onCTAClick} aria-label="Call to Action">
          {ctaLabel}
        </button>
      )}
      <button onClick={handleDismiss} aria-label="Dismiss">
        Dismiss
      </button>
    </div>
  );
};

export default Banner;