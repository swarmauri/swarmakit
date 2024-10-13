import ColorPicker from './ColorPicker.svelte';

export default {
  title: 'Forms/ColorPicker',
  component: ColorPicker,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    selectedColor: '#000000',
    disabled: false,
  },
};

export const Selected = {
  args: {
    selectedColor: '#ff5733',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    selectedColor: '#000000',
    disabled: true,
  },
};