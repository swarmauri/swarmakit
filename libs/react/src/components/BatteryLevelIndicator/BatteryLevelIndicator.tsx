import React from 'react';

interface BatteryLevelIndicatorProps {
  level: number;
  isCharging: boolean;
}

const BatteryLevelIndicator: React.FC<BatteryLevelIndicatorProps> = ({ level, isCharging }) => {
  const getStatus = () => {
    if (isCharging) return 'Charging';
    if (level > 80) return 'Full';
    if (level > 20) return 'Low Battery';
    return 'Critical';
  };

  return (
    <div className="battery-level-indicator" aria-label={`Battery status: ${getStatus()}`}>
      <div className="battery-icon">
        <div className="battery-level" style={{ width: `${level}%` }}></div>
      </div>
      <span className="battery-status">{getStatus()}</span>
    </div>
  );
};

export default BatteryLevelIndicator;