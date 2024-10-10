import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const IndicatorContainer = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 3px solid ${(props) => (props.type === 'loading' ? '#ccc' : 'transparent')};
  border-top-color: ${(props) => {
    switch (props.type) {
      case 'loading':
        return '#3498db';
      case 'success':
        return '#4caf50';
      case 'error':
        return '#f44336';
      default:
        return '#ccc';
    }
  }};
  border-radius: 50%;
  animation: ${(props) => (props.type === 'loading' ? `${rotate} 1s linear infinite` : 'none')};
`;

const ActivityIndicators = ({ type }) => {
  return <IndicatorContainer type={type} />;
};

ActivityIndicators.propTypes = {
  type: PropTypes.oneOf(['loading', 'success', 'error']).isRequired,
};

export default ActivityIndicators;