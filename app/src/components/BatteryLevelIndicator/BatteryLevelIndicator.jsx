import React from 'react';
import PropTypes from 'prop-types';
import './BatteryLevelIndicator.css';

const BatteryLevelIndicator = ({ level, isCharging }) => {
  const getBatteryStatus = () => {
    if (isCharging) return 'charging';
    if (level > 75) return 'full';
    if (level > 20) return 'low';
    return 'critical';
  };

  return (
    <div className={`battery-level-indicator ${getBatteryStatus()}`}>
      <div className="battery-level" style={{ width: `${level}%` }}></div>
    </div>
  );
};

BatteryLevelIndicator.propTypes = {
  level: PropTypes.number.isRequired,
  isCharging: PropTypes.bool,
};

BatteryLevelIndicator.defaultProps = {
  isCharging: false,
};

export default BatteryLevelIndicator;