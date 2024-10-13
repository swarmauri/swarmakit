import Stepper from './Stepper.svelte';

export default {
  title: 'Indicators/Stepper',
  component: Stepper,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    steps: [
      { label: 'Step 1', state: 'completed' },
      { label: 'Step 2', state: 'active' },
      { label: 'Step 3', state: 'disabled' },
    ],
  },
};

export const Completed = {
  args: {
    steps: [
      { label: 'Step 1', state: 'completed' },
      { label: 'Step 2', state: 'completed' },
      { label: 'Step 3', state: 'completed' },
    ],
  },
};

export const Active = {
  args: {
    steps: [
      { label: 'Step 1', state: 'completed' },
      { label: 'Step 2', state: 'active' },
      { label: 'Step 3', state: 'disabled' },
    ],
  },
};

export const Disabled = {
  args: {
    steps: [
      { label: 'Step 1', state: 'disabled' },
      { label: 'Step 2', state: 'disabled' },
      { label: 'Step 3', state: 'disabled' },
    ],
  },
};