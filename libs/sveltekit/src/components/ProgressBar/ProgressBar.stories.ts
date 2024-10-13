import ProgressBar from './ProgressBar.svelte';

export default {
  title: 'Indicators/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    progress: 50,
    disabled: false,
  },
};

export const Complete = {
  args: {
    progress: 100,
    disabled: false,
  },
};

export const Incomplete = {
  args: {
    progress: 0,
    disabled: false,
  },
};

export const Hover = {
  args: {
    progress: 50,
    disabled: false,
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const Disabled = {
  args: {
    progress: 50,
    disabled: true,
  },
};