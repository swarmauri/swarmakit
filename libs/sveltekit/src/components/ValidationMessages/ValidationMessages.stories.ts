import ValidationMessages from './ValidationMessages.svelte';

export default {
  title: 'Forms/ValidationMessages',
  component: ValidationMessages,
  argTypes: {
    message: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning'],
    },
  },
};

const Template = (args) => ({
  Component: ValidationMessages,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  message: 'This is a validation message.',
  type: 'success',
};

export const Success = Template.bind({});
Success.args = {
  message: 'Operation was successful!',
  type: 'success',
};

export const Error = Template.bind({});
Error.args = {
  message: 'There was an error processing your request.',
  type: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'This is a warning message.',
  type: 'warning',
};