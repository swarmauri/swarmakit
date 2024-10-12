import Checkbox from './Checkbox.svelte';

export default {
  title: 'Components/Forms',
  component: Checkbox,
  tags: ['autodocs']
};

export const Default = {
  args: {
    checked: false,
    disabled: false
  }
};

export const Checked = {
  args: {
    ...Default.args,
    checked: true
  }
};

export const Unchecked = {
  args: {
    ...Default.args,
    checked: false
  }
};

export const Disabled = {
  args: {
    ...Default.args,
    disabled: true
  }
};