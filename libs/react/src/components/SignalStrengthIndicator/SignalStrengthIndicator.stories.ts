import React from 'react';
import { Meta, Story } from '@storybook/react';
import SignalStrengthIndicator from './SignalStrengthIndicator';

export default {
  title: 'component/Indicators/SignalStrengthIndicator',
  component: SignalStrengthIndicator,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SignalStrengthIndicatorProps> = (args) => <SignalStrengthIndicator {...args} />;

export const Default = Template.bind({});
Default.args = {
  strength: 'full',
};

export const FullSignal = Template.bind({});
FullSignal.args = {
  strength: 'full',
};

export const WeakSignal = Template.bind({});
WeakSignal.args = {
  strength: 'weak',
};

export const NoSignal = Template.bind({});
NoSignal.args = {
  strength: 'none',
};