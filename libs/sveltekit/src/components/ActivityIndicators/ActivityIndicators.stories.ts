import ActivityIndicators from './ActivityIndicators.svelte';

export default {
  title: 'Indicators/ActivityIndicators',
  component: ActivityIndicators,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    type: 'loading',
  },
};

export const Loading = {
  args: {
    type: 'loading',
  },
};

export const Success = {
  args: {
    type: 'success',
  },
};

export const Error = {
  args: {
    type: 'error',
  },
};