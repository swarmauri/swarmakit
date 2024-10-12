import SignalStrengthIndicator from './SignalStrengthIndicator.svelte';

export default {
  title: 'Components/Indicators/SignalStrengthIndicator',
  component: SignalStrengthIndicator,
  tags: ['autodocs'],
  argTypes: {
    strength: { control: { type: 'number', min: 0, max: 4 } },
  },
};

const Template = (args) => ({
  Component: SignalStrengthIndicator,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  strength: 3,
};

export const FullSignal = Template.bind({});
FullSignal.args = {
  strength: 4,
};

export const WeakSignal = Template.bind({});
WeakSignal.args = {
  strength: 1,
};

export const NoSignal = Template.bind({});
NoSignal.args = {
  strength: 0,
};