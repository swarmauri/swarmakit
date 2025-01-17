import React from 'react';

interface NotificationBellIconProps {
  hasNotifications: boolean;
  dismissed: boolean;
}

const NotificationBellIcon: React.FC<NotificationBellIconProps> = ({
  hasNotifications,
  dismissed
}) => {
  return (
    <div
      role="button"
      aria-label={
        hasNotifications
          ? dismissed
            ? 'Notifications dismissed'
            : 'You have new notifications'
          : 'No new notifications'
      }
      className={`notification-bell-icon ${
        hasNotifications ? (dismissed ? 'dismissed' : 'new') : 'none'
      }`}
    >
      <svg
        className="bell"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M12 2C13.1 2 14 2.9 14 4V5.68C17.39 6.51 20 9.47 20 13V18L22 20V21H2V20L4 18V13C4 9.47 6.61 6.51 10 5.68V4C10 2.9 10.9 2 12 2ZM12 22C10.9 22 10 21.1 10 20H14C14 21.1 13.1 22 12 22Z"
          fill="currentColor"
        />
      </svg>
      {hasNotifications && !dismissed && <span className="notification-dot" />}
    </div>
  );
};

export default NotificationBellIcon;