import LoadingBarsWithSteps from './LoadingBarsWithSteps.svelte';

export default {
  title: 'Indicators/LoadingBarsWithSteps',
  component: LoadingBarsWithSteps,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    steps: [
      { id: 1, label: 'Step 1', status: 'active' },
      { id: 2, label: 'Step 2', status: 'inactive' },
      { id: 3, label: 'Step 3', status: 'inactive' },
    ],
  },
};

export const StepActive = {
  args: {
    steps: [
      { id: 1, label: 'Step 1', status: 'active' },
      { id: 2, label: 'Step 2', status: 'inactive' },
      { id: 3, label: 'Step 3', status: 'inactive' },
    ],
  },
};

export const StepCompleted = {
  args: {
    steps: [
      { id: 1, label: 'Step 1', status: 'completed' },
      { id: 2, label: 'Step 2', status: 'completed' },
      { id: 3, label: 'Step 3', status: 'active' },
    ],
  },
};

export const StepInactive = {
  args: {
    steps: [
      { id: 1, label: 'Step 1', status: 'inactive' },
      { id: 2, label: 'Step 2', status: 'inactive' },
      { id: 3, label: 'Step 3', status: 'inactive' },
    ],
  },
};