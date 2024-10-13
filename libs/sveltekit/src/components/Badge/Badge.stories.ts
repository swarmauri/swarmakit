import Badge from './Badge.svelte';

export default {
  title: 'Indicators/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    type: 'default',
    label: 'Default Badge',
  },
};

export const Notification = {
  args: {
    type: 'notification',
    label: '3',
  },
};

export const StatusIndicator = {
  args: {
    type: 'status',
    label: 'Online',
  },
};