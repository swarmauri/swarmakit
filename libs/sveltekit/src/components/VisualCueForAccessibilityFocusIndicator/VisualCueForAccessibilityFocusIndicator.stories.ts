import VisualCueForAccessibilityFocusIndicator from './VisualCueForAccessibilityFocusIndicator.svelte';
import type { Meta, Story } from '@storybook/svelte';

const meta: Meta = {
  title: 'Components/Indicators/VisualCueForAccessibilityFocusIndicator',
  component: VisualCueForAccessibilityFocusIndicator,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['focused', 'unfocused'],
    },
  },
};

export default meta;

const Template: Story = (args) => ({
  Component: VisualCueForAccessibilityFocusIndicator,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  state: 'unfocused',
};

export const Focused = Template.bind({});
Focused.args = {
  state: 'focused',
};

export const Unfocused = Template.bind({});
Unfocused.args = {
  state: 'unfocused',
};