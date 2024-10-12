import React from 'react';
import PropTypes from 'prop-types';
import './NotificationBellIcon.css';

const NotificationBellIcon = ({ hasNotifications, dismissed }) => {
  return (
    <div className={`notification-bell ${hasNotifications ? 'new' : dismissed ? 'dismissed' : 'none'}`}>
      <span className="bell-icon">🔔</span>
      {hasNotifications && !dismissed && <span className="notification-dot" />}
    </div>
  );
};

NotificationBellIcon.propTypes = {
  hasNotifications: PropTypes.bool,
  dismissed: PropTypes.bool,
};

NotificationBellIcon.defaultProps = {
  hasNotifications: false,
  dismissed: false,
};

export default NotificationBellIcon;