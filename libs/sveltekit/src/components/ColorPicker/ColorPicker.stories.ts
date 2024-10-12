import ColorPicker from './ColorPicker.svelte';

export default {
  title: 'Components/Forms/ColorPicker',
  component: ColorPicker,
  tags: ['autodocs'],
  argTypes: {
    selectedColor: { control: 'color' },
    isDisabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: ColorPicker,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  selectedColor: '#000000',
  isDisabled: false,
};

export const Selected = Template.bind({});
Selected.args = {
  selectedColor: '#ff5733',
  isDisabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  selectedColor: '#000000',
  isDisabled: true,
};