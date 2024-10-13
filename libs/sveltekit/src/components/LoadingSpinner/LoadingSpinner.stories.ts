import LoadingSpinner from './LoadingSpinner.svelte';

export default {
  title: 'Indicators/LoadingSpinner',
  component: LoadingSpinner,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    active: true,
  },
};

export const Active = {
  args: {
    active: true,
  },
};

export const Inactive = {
  args: {
    active: false,
  },
};