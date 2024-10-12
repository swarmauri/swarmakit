import VisualCueForAccessibilityFocusIndicator from './VisualCueForAccessibilityFocusIndicator.vue';

export default {
  title: 'Indicators/VisualCueForAccessibilityFocusIndicator',
  component: VisualCueForAccessibilityFocusIndicator,
  tags: ['autodocs'],
};

const Template = (args: any) => ({
  components: { VisualCueForAccessibilityFocusIndicator },
  setup() {
    return { args };
  },
  template: '<VisualCueForAccessibilityFocusIndicator v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};

export const Focused = Template.bind({});
Focused.args = {};

export const Unfocused = Template.bind({});
Unfocused.args = {};