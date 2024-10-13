import NotificationBellIcon from './NotificationBellIcon.svelte';

export default {
  title: 'Indicators/NotificationBellIcon',
  component: NotificationBellIcon,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    hasNotifications: false,
    dismissed: false,
  },
};

export const NoNotifications = {
  args: {
    hasNotifications: false,
    dismissed: false,
  },
};

export const NewNotifications = {
  args: {
    hasNotifications: true,
    dismissed: false,
  },
};

export const Dismissed = {
  args: {
    hasNotifications: true,
    dismissed: true,
  },
};