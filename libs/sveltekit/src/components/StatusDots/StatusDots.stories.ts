import StatusDots from './StatusDots.svelte';

export default {
  title: 'Indicators/StatusDots',
  component: StatusDots,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    status: 'offline',
  },
};

export const Online = {
  args: {
    status: 'online',
  },
};

export const Offline = {
  args: {
    status: 'offline',
  },
};

export const Busy = {
  args: {
    status: 'busy',
  },
};

export const Idle = {
  args: {
    status: 'idle',
  },
};