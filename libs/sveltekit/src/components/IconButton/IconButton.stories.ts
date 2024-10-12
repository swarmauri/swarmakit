import IconButton from './IconButton.svelte';

export default {
  title: 'Components/Buttons',
  component: IconButton,
  tags: ['autodocs']
};

export const Default = {
  args: {
    icon: 'path/to/default-icon.svg',
    label: 'Icon Button',
    disabled: false
  }
};

export const Active = {
  args: {
    ...Default.args,
    icon: 'path/to/active-icon.svg'
  }
};

export const Hover = {
  args: {
    ...Default.args,
    icon: 'path/to/hover-icon.svg'
  }
};

export const Disabled = {
  args: {
    ...Default.args,
    disabled: true
  }
};