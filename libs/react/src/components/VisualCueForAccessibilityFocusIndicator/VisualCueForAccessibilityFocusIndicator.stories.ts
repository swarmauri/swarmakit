import React from 'react';
import { Meta, Story } from '@storybook/react';
import VisualCueForAccessibilityFocusIndicator from './VisualCueForAccessibilityFocusIndicator';

export default {
  title: 'component/Indicators/VisualCueForAccessibilityFocusIndicator',
  component: VisualCueForAccessibilityFocusIndicator,
  tags: ['autodocs'],
} as Meta;

const Template: Story<VisualCueForAccessibilityFocusIndicatorProps> = (args) => <VisualCueForAccessibilityFocusIndicator {...args} />;

export const Default = Template.bind({});
Default.args = {
  isFocused: false,
};

export const Focused = Template.bind({});
Focused.args = {
  isFocused: true,
};

export const Unfocused = Template.bind({});
Unfocused.args = {
  isFocused: false,
};