import SignalStrengthIndicator from './SignalStrengthIndicator.vue';

export default {
  title: 'Indicators/SignalStrengthIndicator',
  component: SignalStrengthIndicator,
  tags: ['autodocs'],
  argTypes: {
    strength: {
      control: { type: 'number', min: 0, max: 5 },
      description: 'The current signal strength value',
    },
    state: {
      control: { type: 'select', options: ['full', 'weak', 'none'] },
      description: 'The current state of the signal strength',
    },
  },
};

const Template = (args: any) => ({
  components: { SignalStrengthIndicator },
  setup() {
    return { args };
  },
  template: '<SignalStrengthIndicator v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  strength: 3,
  state: 'weak',
};

export const FullSignal = Template.bind({});
FullSignal.args = {
  strength: 5,
  state: 'full',
};

export const WeakSignal = Template.bind({});
WeakSignal.args = {
  strength: 2,
  state: 'weak',
};

export const NoSignal = Template.bind({});
NoSignal.args = {
  strength: 0,
  state: 'none',
};