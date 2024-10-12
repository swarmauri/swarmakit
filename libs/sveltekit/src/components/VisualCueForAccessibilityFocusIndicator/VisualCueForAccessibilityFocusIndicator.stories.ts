import VisualCueForAccessibilityFocusIndicator from './VisualCueForAccessibilityFocusIndicator.svelte';
import type { FocusState } from './VisualCueForAccessibilityFocusIndicator.svelte';

export default {
  title: 'Indicators/VisualCueForAccessibilityFocusIndicator',
  component: VisualCueForAccessibilityFocusIndicator,
  argTypes: {
    state: {
      control: 'select',
      options: Object.values(FocusState),
    },
  },
};

const Template = (args) => ({
  Component: VisualCueForAccessibilityFocusIndicator,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: FocusState.Unfocused,
};

export const Focused = Template.bind({});
Focused.args = {
  state: FocusState.Focused,
};

export const Unfocused = Template.bind({});
Unfocused.args = {
  state: FocusState.Unfocused,
};