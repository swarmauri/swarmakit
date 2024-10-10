import React from 'react';
import PropTypes from 'prop-types';
import './StatusDots.css';

const StatusDots = ({ status }) => {
  const getStatusClass = () => {
    switch (status) {
      case 'Online':
        return 'dot online';
      case 'Offline':
        return 'dot offline';
      case 'Busy':
        return 'dot busy';
      case 'Idle':
        return 'dot idle';
      default:
        return 'dot';
    }
  };

  return <div className={getStatusClass()} />;
};

StatusDots.propTypes = {
  status: PropTypes.oneOf(['Online', 'Offline', 'Busy', 'Idle']),
};

StatusDots.defaultProps = {
  status: 'Offline',
};

export default StatusDots;