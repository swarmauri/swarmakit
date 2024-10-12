import React from 'react';
import PropTypes from 'prop-types';
import './StatusIndicatorActiveInactive.css';

const StatusIndicatorActiveInactive = ({ isActive, label }) => (
  <div className={`status-indicator ${isActive ? 'active' : 'inactive'}`}>
    <span className="status-dot"></span>
    <span className="status-label">{label}</span>
  </div>
);

StatusIndicatorActiveInactive.propTypes = {
  isActive: PropTypes.bool.isRequired,
  label: PropTypes.string,
};

StatusIndicatorActiveInactive.defaultProps = {
  label: 'Status',
};

export default StatusIndicatorActiveInactive;