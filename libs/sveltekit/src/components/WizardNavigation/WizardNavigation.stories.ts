import WizardNavigation from './WizardNavigation.svelte';

export default {
  title: 'Navigation/WizardNavigation',
  component: WizardNavigation,
  argTypes: {
    currentStep: { control: 'number' },
    totalSteps: { control: 'number' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: WizardNavigation,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  currentStep: 1,
  totalSteps: 5,
  disabled: false,
};

export const Completed = Template.bind({});
Completed.args = {
  currentStep: 5,
  totalSteps: 5,
  disabled: false,
};

export const CurrentStep = Template.bind({});
CurrentStep.args = {
  currentStep: 3,
  totalSteps: 5,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  currentStep: 1,
  totalSteps: 5,
  disabled: true,
};