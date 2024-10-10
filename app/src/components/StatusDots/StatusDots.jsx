import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${({ statusColor }) => statusColor};
  transition: background-color 0.3s;
`;

const StatusDots = ({ status }) => {
  const statusColors = {
    online: '#4caf50',
    offline: '#d3d3d3',
    busy: '#f44336',
    idle: '#ffeb3b',
  };

  return <Dot statusColor={statusColors[status]} />;
};

StatusDots.propTypes = {
  status: PropTypes.oneOf(['online', 'offline', 'busy', 'idle']),
};

StatusDots.defaultProps = {
  status: 'offline',
};

export default StatusDots;