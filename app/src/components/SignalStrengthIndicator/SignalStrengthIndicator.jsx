import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SignalContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.3rem;
`;

const SignalBar = styled.div`
  width: 0.5rem;
  background-color: ${({ isActive }) => (isActive ? '#4caf50' : '#d3d3d3')};
  transition: background-color 0.3s;
`;

const SignalStrengthIndicator = ({ signalStrength }) => {
  const totalBars = 5;

  return (
    <SignalContainer>
      {[...Array(totalBars)].map((_, index) => (
        <SignalBar
          key={index}
          isActive={index < signalStrength}
          style={{ height: `${(index + 1) * 0.8}rem` }}
        />
      ))}
    </SignalContainer>
  );
};

SignalStrengthIndicator.propTypes = {
  signalStrength: PropTypes.number,
};

SignalStrengthIndicator.defaultProps = {
  signalStrength: 0,
};

export default SignalStrengthIndicator;