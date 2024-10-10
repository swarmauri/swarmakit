import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Step = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({ stepState }) => {
    switch (stepState) {
      case 'completed':
        return '#4caf50';
      case 'active':
        return '#2196f3';
      case 'disabled':
        return '#d3d3d3';
      default:
        return '#d3d3d3';
    }
  }};
  color: white;
  font-weight: bold;
  transition: background-color 0.3s;
`;

const Stepper = ({ step, state }) => {
  return <Step stepState={state}>{step}</Step>;
};

Stepper.propTypes = {
  step: PropTypes.number.isRequired,
  state: PropTypes.oneOf(['completed', 'active', 'disabled']),
};

Stepper.defaultProps = {
  state: 'disabled',
};

export default Stepper;