import IconButton from './IconButton.svelte';

export default {
  title: 'Buttons/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'text' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    icon: 'fas fa-star',
    label: 'Favorite',
    disabled: false,
  },
};

export const Active = {
  args: {
    ...Default.args,
  },
  parameters: {
    pseudo: { active: true },
  },
};

export const Hover = {
  args: {
    ...Default.args,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Disabled = {
  args: {
    ...Default.args,
    disabled: true,
  },
};