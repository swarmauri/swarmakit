import React from 'react';
import SignalStrengthIndicator from './SignalStrengthIndicator';

export default {
  title: 'Indicators/SignalStrengthIndicator',
  component: SignalStrengthIndicator,
};

const Template = (args) => <SignalStrengthIndicator {...args} />;

export const Default = Template.bind({});
Default.args = {
  strength: 3,
};

export const FullSignal = Template.bind({});
FullSignal.args = {
  strength: 5,
};

export const WeakSignal = Template.bind({});
WeakSignal.args = {
  strength: 2,
};

export const NoSignal = Template.bind({});
NoSignal.args = {
  strength: 0,
};