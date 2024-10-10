import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Spinner = styled.div`
  border: 4px solid ${({ inactive }) => (inactive ? '#bdc3c7' : '#f3f3f3')};
  border-top: 4px solid ${({ inactive }) => (inactive ? '#7f8c8d' : '#3498db')};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
  opacity: ${({ inactive }) => (inactive ? 0.5 : 1)};

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingSpinner = ({ inactive }) => {
  return <Spinner inactive={inactive} />;
};

LoadingSpinner.propTypes = {
  inactive: PropTypes.bool,
};

LoadingSpinner.defaultProps = {
  inactive: false,
};

export default LoadingSpinner;