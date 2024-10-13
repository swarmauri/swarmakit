import IconButton from './IconButton.svelte';

export default {
  title: 'Buttons/IconButton',
  component: IconButton,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    icon: 'path/to/icon.svg',
    label: 'Icon Button',
    disabled: false,
  },
};

export const Active = {
  args: {
    icon: 'path/to/icon.svg',
    label: 'Active Icon Button',
    disabled: false,
  },
  parameters: {
    pseudo: { active: true },
  },
};

export const Hover = {
  args: {
    icon: 'path/to/icon.svg',
    label: 'Hover Icon Button',
    disabled: false,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Disabled = {
  args: {
    icon: 'path/to/icon.svg',
    label: 'Disabled Icon Button',
    disabled: true,
  },
};