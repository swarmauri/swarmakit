import React from 'react';

interface SignalStrengthIndicatorProps {
  strength: 'full' | 'weak' | 'none';
}

const SignalStrengthIndicator: React.FC<SignalStrengthIndicatorProps> = ({ strength }) => {
  return (
    <div className="signal-strength-indicator" aria-label={`Signal strength: ${strength}`}>
      <div className={`signal-bar ${strength === 'full' ? 'active' : ''}`}></div>
      <div className={`signal-bar ${strength !== 'none' ? 'active' : ''}`}></div>
      <div className={`signal-bar ${strength === 'full' ? 'active' : ''}`}></div>
    </div>
  );
};

export default SignalStrengthIndicator;