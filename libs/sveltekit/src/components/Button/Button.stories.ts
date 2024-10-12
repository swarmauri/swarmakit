import Button from './Button.svelte';

export default {
  title: 'Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
    disabled: { control: 'boolean' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
  },
};

export const Default = {
  args: {
    type: 'button',
    disabled: false,
    variant: 'primary',
    children: 'Button',
  },
};

export const Primary = {
  args: {
    ...Default.args,
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    ...Default.args,
    variant: 'secondary',
  },
};

export const Disabled = {
  args: {
    ...Default.args,
    disabled: true,
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

export const Active = {
  args: {
    ...Default.args,
  },
  parameters: {
    pseudo: { active: true },
  },
};