import RadioButton from './RadioButton.svelte';

export default {
  title: 'Forms/RadioButton',
  component: RadioButton,
  argTypes: {
    name: { control: 'text' },
    value: { control: 'text' },
    selectedValue: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: RadioButton,
  props: args,
  on: {
    change: args.onChange,
  },
});

export const Default = Template.bind({});
Default.args = {
  name: 'option',
  value: 'Option 1',
  selectedValue: '',
  disabled: false,
  onChange: (value) => console.log('Radio button selected:', value),
};

export const Selected = Template.bind({});
Selected.args = {
  name: 'option',
  value: 'Option 1',
  selectedValue: 'Option 1',
  disabled: false,
  onChange: (value) => console.log('Radio button selected:', value),
};

export const Unselected = Template.bind({});
Unselected.args = {
  name: 'option',
  value: 'Option 1',
  selectedValue: '',
  disabled: false,
  onChange: (value) => console.log('Radio button selected:', value),
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'option',
  value: 'Option 1',
  selectedValue: 'Option 1',
  disabled: true,
  onChange: (value) => console.log('Radio button selected:', value),
};