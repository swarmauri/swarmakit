import React from 'react';
import VisualCueForAccessibilityFocusIndicator from './VisualCueForAccessibilityFocusIndicator';

export default {
  title: 'Indicators/VisualCueForAccessibilityFocusIndicator',
  component: VisualCueForAccessibilityFocusIndicator,
};

const Template = (args) => <VisualCueForAccessibilityFocusIndicator {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'Focusable Content',
  isFocused: false,
};

export const Focused = Template.bind({});
Focused.args = {
  content: 'Focusable Content',
  isFocused: true,
};

export const Unfocused = Template.bind({});
Unfocused.args = {
  content: 'Focusable Content',
  isFocused: false,
};