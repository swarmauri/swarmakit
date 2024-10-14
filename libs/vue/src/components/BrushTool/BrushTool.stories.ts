import BrushTool from './BrushTool.vue';
import { Meta, Story } from '@storybook/vue3';

export default {
  title: 'component/Drawing/BrushTool',
  component: BrushTool,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => ({
  components: { BrushTool },
  setup() {
    return { args };
  },
  template: '<BrushTool v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};

export const Active = Template.bind({});
Active.args = {
  isActive: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  isActive: false,
};