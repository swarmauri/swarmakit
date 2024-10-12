import LoadingBarsWithSteps from './LoadingBarsWithSteps.vue';

export default {
  title: 'Indicators/LoadingBarsWithSteps',
  component: LoadingBarsWithSteps,
  tags: ['autodocs'],
  argTypes: {
    steps: {
      control: { type: 'object' },
      description: 'Array of steps with labels',
    },
    activeStep: {
      control: { type: 'number' },
      description: 'Current active step',
    },
  },
};

const Template = (args: any) => ({
  components: { LoadingBarsWithSteps },
  setup() {
    return { args };
  },
  template: '<LoadingBarsWithSteps v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  steps: [
    { id: 1, label: 'Step 1' },
    { id: 2, label: 'Step 2' },
    { id: 3, label: 'Step 3' },
    { id: 4, label: 'Step 4' },
  ],
  activeStep: 1,
};

export const StepActive = Template.bind({});
StepActive.args = {
  ...Default.args,
  activeStep: 2,
};

export const StepCompleted = Template.bind({});
StepCompleted.args = {
  ...Default.args,
  activeStep: 4,
};

export const StepInactive = Template.bind({});
StepInactive.args = {
  ...Default.args,
  activeStep: 0,
};