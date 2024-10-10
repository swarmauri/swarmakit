import React from 'react';
import SignalStrengthIndicator from './SignalStrengthIndicator';

export default {
  title: 'Indicators/SignalStrengthIndicator',
  component: SignalStrengthIndicator,
};

const Template = (args) => <SignalStrengthIndicator {...args} />;

export const Default = Template.bind({});
Default.args = {
  signalStrength: 3,
};

export const FullSignal = Template.bind({});
FullSignal.args = {
  signalStrength: 5,
};

export const WeakSignal = Template.bind({});
WeakSignal.args = {
  signalStrength: 2,
};

export const NoSignal = Template.bind({});
NoSignal.args = {
  signalStrength: 0,
};