import Stepper from './Stepper.svelte';
import type { StepState } from './Stepper.svelte';

export default {
  title: 'Indicators/Stepper',
  component: Stepper,
  argTypes: {
    state: {
      control: {
        type: 'select',
        options: Object.values(StepState),
      },
    },
    currentStepIndex: {
      control: { type: 'number', min: 0 },
    },
  },
};

const Template = (args) => ({
  Component: Stepper,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: StepState.Disabled,
  steps: ['Step 1', 'Step 2', 'Step 3'],
  currentStepIndex: 0,
};

export const Completed = Template.bind({});
Completed.args = {
  state: StepState.Completed,
  steps: ['Step 1', 'Step 2', 'Step 3'],
  currentStepIndex: 2,
};

export const Active = Template.bind({});
Active.args = {
  state: StepState.Active,
  steps: ['Step 1', 'Step 2', 'Step 3'],
  currentStepIndex: 1,
};

export const Disabled = Template.bind({});
Disabled.args = {
  state: StepState.Disabled,
  steps: ['Step 1', 'Step 2', 'Step 3'],
  currentStepIndex: 0,
};