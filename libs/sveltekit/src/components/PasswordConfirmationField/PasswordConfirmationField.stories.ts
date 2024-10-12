import PasswordConfirmationField from './PasswordConfirmationField.svelte';

export default {
  title: 'Components/Forms/PasswordConfirmationField',
  component: PasswordConfirmationField,
  tags: ['autodocs'],
  argTypes: {
    password: { control: 'text' },
    confirmPassword: { control: 'text' },
    disabled: { control: 'boolean' },
    minLength: { control: 'number' },
  },
};

const Template = (args) => ({
  Component: PasswordConfirmationField,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  password: '',
  confirmPassword: '',
  disabled: false,
  minLength: 8,
};

export const Matching = Template.bind({});
Matching.args = {
  password: 'password123',
  confirmPassword: 'password123',
  disabled: false,
  minLength: 8,
};

export const NotMatching = Template.bind({});
NotMatching.args = {
  password: 'password123',
  confirmPassword: 'password321',
  disabled: false,
  minLength: 8,
};

export const Disabled = Template.bind({});
Disabled.args = {
  password: 'password123',
  confirmPassword: 'password123',
  disabled: true,
  minLength: 8,
};