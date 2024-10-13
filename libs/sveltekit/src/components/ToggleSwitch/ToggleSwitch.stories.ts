import ToggleSwitch from './ToggleSwitch.svelte';

export default {
  title: 'Forms/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    checked: false,
    disabled: false,
  },
};

export const On = {
  args: {
    checked: true,
    disabled: false,
  },
};

export const Off = {
  args: {
    checked: false,
    disabled: false,
  },
};

export const Disabled = {
  args: {
    checked: false,
    disabled: true,
  },
};