import Checkbox from './Checkbox.svelte';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'Checkbox',
    checked: false,
    disabled: false,
  },
};

export const Checked = {
  args: {
    label: 'Checkbox',
    checked: true,
    disabled: false,
  },
};

export const Unchecked = {
  args: {
    label: 'Checkbox',
    checked: false,
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: 'Checkbox',
    checked: false,
    disabled: true,
  },
};