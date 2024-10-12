import RadioButton from './RadioButton.svelte';

export default {
  title: 'Components/Forms/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    name: { control: 'text' },
    value: { control: 'text' },
    label: { control: 'text' },
  },
};

const Template = (args) => ({
  Component: RadioButton,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  selected: false,
  disabled: false,
  name: 'option',
  value: 'default',
  label: 'Default Option',
};

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
  disabled: false,
  name: 'option',
  value: 'selected',
  label: 'Selected Option',
};

export const Unselected = Template.bind({});
Unselected.args = {
  selected: false,
  disabled: false,
  name: 'option',
  value: 'unselected',
  label: 'Unselected Option',
};

export const Disabled = Template.bind({});
Disabled.args = {
  selected: false,
  disabled: true,
  name: 'option',
  value: 'disabled',
  label: 'Disabled Option',
};