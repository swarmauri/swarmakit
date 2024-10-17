import Canvas from './Canvas.vue';
import { Meta, Story } from '@storybook/vue3';

export default {
  title: 'component/Drawing/Canvas',
  component: Canvas,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => ({
  components: { Canvas },
  setup() {
    return { args };
  },
  template: '<Canvas v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};

export const Empty = Template.bind({});
Empty.args = {};

export const DrawingInProgress = Template.bind({});
DrawingInProgress.args = {};

export const Complete = Template.bind({});
Complete.args = {};

export const Cleared = Template.bind({});
Cleared.args = {};