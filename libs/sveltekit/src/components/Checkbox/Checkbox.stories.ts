import Checkbox from './Checkbox.svelte';

export default {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    isChecked: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    label: { control: 'text' },
  },
};

const Template = (args) => ({
  Component: Checkbox,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Accept Terms',
  isChecked: false,
  isDisabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Accept Terms',
  isChecked: true,
  isDisabled: false,
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  label: 'Accept Terms',
  isChecked: false,
  isDisabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Accept Terms',
  isChecked: false,
  isDisabled: true,
};