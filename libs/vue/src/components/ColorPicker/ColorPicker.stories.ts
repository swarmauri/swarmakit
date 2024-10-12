import ColorPicker from './ColorPicker.vue';

export default {
  title: 'Forms/ColorPicker',
  component: ColorPicker,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { ColorPicker },
  setup() {
    return { args };
  },
  template: '<ColorPicker v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  modelValue: '#000000',
  disabled: false,
};

export const Selected = Template.bind({});
Selected.args = {
  modelValue: '#ff5733',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  modelValue: '#000000',
  disabled: true,
};