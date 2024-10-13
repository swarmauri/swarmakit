import SignalStrengthIndicator from './SignalStrengthIndicator.svelte';

export default {
  title: 'Indicators/SignalStrengthIndicator',
  component: SignalStrengthIndicator,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    signalStrength: 'none',
  },
};

export const FullSignal = {
  args: {
    signalStrength: 'full',
  },
};

export const WeakSignal = {
  args: {
    signalStrength: 'weak',
  },
};

export const NoSignal = {
  args: {
    signalStrength: 'none',
  },
};