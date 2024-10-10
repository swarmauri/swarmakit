// GroupAdminBadge.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './GroupAdminBadge.css';

const GroupAdminBadge = ({ isVisible }) => {
  if (!isVisible) return null;
  
  return (
    <span className="group-admin-badge">
      Admin
    </span>
  );
};

GroupAdminBadge.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default GroupAdminBadge;