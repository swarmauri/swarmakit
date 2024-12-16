import React from 'react';

interface GroupChatNotificationsProps {
  state: 'enabled' | 'disabled' | 'muted';
}

const GroupChatNotifications: React.FC<GroupChatNotificationsProps> = ({ state }) => {
  let message;
  switch (state) {
    case 'enabled':
      message = 'Notifications Enabled';
      break;
    case 'muted':
      message = 'Notifications Muted';
      break;
    case 'disabled':
      message = 'Notifications Disabled';
      break;
    default:
      message = '';
  }

  return (
    <div className={`group-chat-notifications ${state}`} role="status" aria-live="polite">
      {message}
    </div>
  );
};

export default GroupChatNotifications;