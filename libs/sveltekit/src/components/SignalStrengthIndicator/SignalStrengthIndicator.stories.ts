import SignalStrengthIndicator from './SignalStrengthIndicator.svelte';

export default {
  title: 'Indicators/SignalStrengthIndicator',
  component: SignalStrengthIndicator,
  argTypes: {
    strength: {
      control: { type: 'number', min: 0, max: 5 },
    },
    maxStrength: {
      control: { type: 'number', min: 1, max: 10 },
    },
  },
};

const Template = (args) => ({
  Component: SignalStrengthIndicator,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  strength: 3,
  maxStrength: 5,
};

export const FullSignal = Template.bind({});
FullSignal.args = {
  strength: 5,
  maxStrength: 5,
};

export const WeakSignal = Template.bind({});
WeakSignal.args = {
  strength: 1,
  maxStrength: 5,
};

export const NoSignal = Template.bind({});
NoSignal.args = {
  strength: 0,
  maxStrength: 5,
};