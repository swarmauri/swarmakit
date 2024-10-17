import EraserTool from './EraserTool.vue';
import { Meta, Story } from '@storybook/vue3';

export default {
  title: 'component/Drawing/EraserTool',
  component: EraserTool,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => ({
  components: { EraserTool },
  setup() {
    return { args };
  },
  template: '<EraserTool v-bind="args" />',
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