import LoadingBarsWithSteps from './LoadingBarsWithSteps.svelte';

export default {
  title: 'Components/Indicators/LoadingBarsWithSteps',
  component: LoadingBarsWithSteps,
  tags: ['autodocs'],
  argTypes: {
    steps: { control: 'object' },
  },
};

const Template = (args) => ({
  Component: LoadingBarsWithSteps,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  steps: [
    { label: 'Step 1', active: true, completed: false },
    { label: 'Step 2', active: false, completed: false },
    { label: 'Step 3', active: false, completed: false },
  ],
};

export const StepActive = Template.bind({});
StepActive.args = {
  steps: [
    { label: 'Step 1', active: true, completed: false },
    { label: 'Step 2', active: false, completed: false },
    { label: 'Step 3', active: false, completed: false },
  ],
};

export const StepCompleted = Template.bind({});
StepCompleted.args = {
  steps: [
    { label: 'Step 1', active: false, completed: true },
    { label: 'Step 2', active: true, completed: false },
    { label: 'Step 3', active: false, completed: false },
  ],
};

export const StepInactive = Template.bind({});
StepInactive.args = {
  steps: [
    { label: 'Step 1', active: false, completed: true },
    { label: 'Step 2', active: false, completed: true },
    { label: 'Step 3', active: true, completed: false },
  ],
};