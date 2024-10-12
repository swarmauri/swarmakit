import Textarea from './Textarea.svelte';

export default {
  title: 'Forms/Textarea',
  component: Textarea,
  argTypes: {
    value: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: Textarea,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  value: 'This is a textarea',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 'This textarea is disabled',
  disabled: true,
};