import ColorPicker from './ColorPicker.svelte';

export default {
  title: 'Components/Forms',
  component: ColorPicker,
  tags: ['autodocs']
};

export const Default = {
  args: {
    selectedColor: '#000000',
    disabled: false
  }
};

export const Selected = {
  args: {
    ...Default.args,
    selectedColor: '#ff5733'
  }
};

export const Disabled = {
  args: {
    ...Default.args,
    disabled: true
  }
};