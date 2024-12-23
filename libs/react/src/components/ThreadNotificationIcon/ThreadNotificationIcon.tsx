import React from 'react';

interface ThreadNotificationIconProps {
  enabled: boolean;
  muted: boolean;
}

const ThreadNotificationIcon: React.FC<ThreadNotificationIconProps> = ({ enabled, muted }) => {
  return (
    <div
      className={`thread-notification-icon ${enabled ? 'enabled' : 'disabled'} ${muted ? 'muted' : ''}`}
      role="img"
      aria-label={`Notification Icon ${enabled ? 'Enabled' : 'Disabled'} ${muted ? 'Muted' : ''}`}
    >
      <span>{muted ? '🔕' : enabled ? '🔔' : '🔕'}</span>
    </div>
  );
};

export default ThreadNotificationIcon;