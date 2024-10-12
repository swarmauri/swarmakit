import Button from './Button.svelte';

export default {
  title: 'Components/Buttons',
  component: Button,
  tags: ['autodocs']
};

export const Default = {
  args: {
    label: 'Button',
    type: 'button',
    disabled: false
  }
};

export const Primary = {
  args: {
    ...Default.args,
    label: 'Primary Button'
  }
};

export const Secondary = {
  args: {
    ...Default.args,
    label: 'Secondary Button'
  }
};

export const Disabled = {
  args: {
    ...Default.args,
    disabled: true
  }
};

export const Hover = {
  args: {
    ...Default.args
  }
};

export const Active = {
  args: {
    ...Default.args
  }
};