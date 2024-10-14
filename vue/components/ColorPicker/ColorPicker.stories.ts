import ColorPicker from './ColorPicker.vue';
import { Meta, Story } from '@storybook/vue3';

export default {
  title: 'component/Drawing/ColorPicker',
  component: ColorPicker,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => ({
  components: { ColorPicker },
  setup() {
    return { args };
  },
  template: '<ColorPicker v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};

export const Active = Template.bind({});
Active.args = {
  isActive: true,
};

export const ColorSelected = Template.bind({});
ColorSelected.args = {
  isActive: true,
  selectedColor: '#ff5733',
  hexCode: '#ff5733',
  brightness: 70,
  opacity: 0.8,
};