import CountdownTimer from './CountdownTimer.svelte';

export default {
  title: 'Indicators/CountdownTimer',
  component: CountdownTimer,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    duration: 60,
    isPaused: false,
  },
};

export const Running = {
  args: {
    duration: 30,
    isPaused: false,
  },
};

export const Paused = {
  args: {
    duration: 30,
    isPaused: true,
  },
};

export const Completed = {
  args: {
    duration: 0,
    isPaused: true,
  },
};