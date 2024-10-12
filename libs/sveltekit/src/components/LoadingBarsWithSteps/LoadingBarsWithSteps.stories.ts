import LoadingBarsWithSteps from './LoadingBarsWithSteps.svelte';

export default {
  title: 'Indicators/LoadingBarsWithSteps',
  component: LoadingBarsWithSteps,
  argTypes: {
    steps: {
      control: { type: 'object' },
    },
  },
};

const Template = (args) => ({
  Component: LoadingBarsWithSteps,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  steps: [
    { label: 'Step 1', status: 'inactive' },
    { label: 'Step 2', status: 'active' },
    { label: 'Step 3', status: 'inactive' },
  ],
};

export const StepActive = Template.bind({});
StepActive.args = {
  steps: [
    { label: 'Step 1', status: 'completed' },
    { label: 'Step 2', status: 'active' },
    { label: 'Step 3', status: 'inactive' },
  ],
};

export const StepCompleted = Template.bind({});
StepCompleted.args = {
  steps: [
    { label: 'Step 1', status: 'completed' },
    { label: 'Step 2', status: 'completed' },
    { label: 'Step 3', status: 'active' },
  ],
};

export const StepInactive = Template.bind({});
StepInactive.args = {
  steps: [
    { label: 'Step 1', status: 'inactive' },
    { label: 'Step 2', status: 'inactive' },
    { label: 'Step 3', status: 'inactive' },
  ],
};