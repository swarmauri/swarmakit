import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BatteryContainer = styled.div`
  width: 50px;
  height: 20px;
  border: 2px solid #333;
  border-radius: 3px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const BatteryLevel = styled.div`
  height: 100%;
  border-radius: 2px;
  background-color: ${(props) => {
    if (props.level <= 10) return '#e74c3c';
    if (props.level <= 25) return '#f39c12';
    if (props.level >= 100) return '#2ecc71';
    return '#3498db';
  }};
  width: ${(props) => `${props.level}%`};
  transition: width 0.3s;
`;

const BatteryTip = styled.div`
  width: 6px;
  height: 12px;
  background-color: #333;
  position: absolute;
  right: -8px;
  top: 3px;
`;

const BatteryLevelIndicator = ({ level, isCharging }) => {
  return (
    <BatteryContainer>
      <BatteryLevel level={level} />
      <BatteryTip />
      {isCharging && <span style={{ position: 'absolute', top: '-20px', color: '#f39c12' }}>⚡</span>}
    </BatteryContainer>
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