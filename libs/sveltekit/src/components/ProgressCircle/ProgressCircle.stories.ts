import ProgressCircle from './ProgressCircle.svelte';

export default {
  title: 'Indicators/ProgressCircle',
  component: ProgressCircle,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    progress: 50,
    status: 'active',
  },
};

export const Complete = {
  args: {
    progress: 100,
    status: 'active',
  },
};

export const Incomplete = {
  args: {
    progress: 0,
    status: 'active',
  },
};

export const Paused = {
  args: {
    progress: 50,
    status: 'paused',
  },
};

export const Active = {
  args: {
    progress: 50,
    status: 'active',
  },
};