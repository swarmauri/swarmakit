import Stepper from './Stepper.vue';

export default {
  title: 'Indicators/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    currentStep: {
      control: { type: 'number' },
      description: 'The current active step',
    },
    totalSteps: {
      control: { type: 'number' },
      description: 'Total number of steps',
    },
  },
};

const Template = (args: any) => ({
  components: { Stepper },
  setup() {
    return { args };
  },
  template: '<Stepper v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  currentStep: 1,
  totalSteps: 3,
};

export const Completed = Template.bind({});
Completed.args = {
  currentStep: 3,
  totalSteps: 3,
};

export const Active = Template.bind({});
Active.args = {
  currentStep: 2,
  totalSteps: 3,
};

export const Disabled = Template.bind({});
Disabled.args = {
  currentStep: 0,
  totalSteps: 3,
};