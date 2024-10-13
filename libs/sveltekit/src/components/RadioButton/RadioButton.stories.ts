import RadioButton from './RadioButton.svelte';

export default {
  title: 'Forms/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    name: 'example',
    value: 'Option 1',
    selectedValue: '',
    disabled: false,
  },
};

export const Selected = {
  args: {
    name: 'example',
    value: 'Option 1',
    selectedValue: 'Option 1',
    disabled: false,
  },
};

export const Unselected = {
  args: {
    name: 'example',
    value: 'Option 1',
    selectedValue: 'Option 2',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    name: 'example',
    value: 'Option 1',
    selectedValue: 'Option 1',
    disabled: true,
  },
};