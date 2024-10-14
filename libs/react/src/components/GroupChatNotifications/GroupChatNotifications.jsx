// GroupChatNotifications.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './GroupChatNotifications.css';

const GroupChatNotifications = ({ isEnabled, isMuted }) => {
  let status = 'Disabled';
  if (isEnabled) {
    status = isMuted ? 'Muted' : 'Enabled';
  }

  return (
    <div className={`group-chat-notifications ${status.toLowerCase()}`}>
      Notifications: {status}
    </div>
  );
};

GroupChatNotifications.propTypes = {
  isEnabled: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
};

export default GroupChatNotifications;