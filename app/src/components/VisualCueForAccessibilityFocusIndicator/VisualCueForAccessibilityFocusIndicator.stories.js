import React from 'react';
import VisualCueForAccessibilityFocusIndicator from './VisualCueForAccessibilityFocusIndicator';

export default {
  title: 'Indicators/VisualCueForAccessibilityFocusIndicator',
  component: VisualCueForAccessibilityFocusIndicator,
};

const Template = (args) => <VisualCueForAccessibilityFocusIndicator {...args} />;

export const Default = Template.bind({});
Default.args = {
  isFocused: false,
  label: 'Focus indicator',
};

export const Focused = Template.bind({});
Focused.args = {
  isFocused: true,
  label: 'Focused state',
};

export const Unfocused = Template.bind({});
Unfocused.args = {
  isFocused: false,
  label: 'Unfocused state',
};