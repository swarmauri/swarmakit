import VisualCueForAccessibilityFocusIndicator from './VisualCueForAccessibilityFocusIndicator.svelte';

export default {
  title: 'Indicators/VisualCueForAccessibilityFocusIndicator',
  component: VisualCueForAccessibilityFocusIndicator,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    isFocused: false,
  },
};

export const Focused = {
  args: {
    isFocused: true,
  },
};

export const Unfocused = {
  args: {
    isFocused: false,
  },
};