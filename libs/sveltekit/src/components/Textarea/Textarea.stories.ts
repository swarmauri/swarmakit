import Textarea from './Textarea.svelte';

export default {
  title: 'Components/Forms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: Textarea,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  value: '',
  placeholder: 'Enter text...',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: '',
  placeholder: 'Enter text...',
  disabled: true,
};