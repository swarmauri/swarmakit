import PasswordConfirmationField from './PasswordConfirmationField.svelte';

export default {
  title: 'Forms/PasswordConfirmationField',
  component: PasswordConfirmationField,
  argTypes: {
    password: { control: 'text' },
    confirmPassword: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: PasswordConfirmationField,
  props: args,
  on: {
    passwordChange: args.onPasswordChange,
    confirmPasswordChange: args.onConfirmPasswordChange,
  },
});

export const Default = Template.bind({});
Default.args = {
  password: '',
  confirmPassword: '',
  disabled: false,
  onPasswordChange: (password) => console.log('Password changed:', password),
  onConfirmPasswordChange: (confirmPassword) =>
    console.log('Confirm password changed:', confirmPassword),
};

export const Matching = Template.bind({});
Matching.args = {
  password: 'password123',
  confirmPassword: 'password123',
  disabled: false,
  onPasswordChange: (password) => console.log('Password changed:', password),
  onConfirmPasswordChange: (confirmPassword) =>
    console.log('Confirm password changed:', confirmPassword),
};

export const NotMatching = Template.bind({});
NotMatching.args = {
  password: 'password123',
  confirmPassword: 'password',
  disabled: false,
  onPasswordChange: (password) => console.log('Password changed:', password),
  onConfirmPasswordChange: (confirmPassword) =>
    console.log('Confirm password changed:', confirmPassword),
};

export const Disabled = Template.bind({});
Disabled.args = {
  password: 'password123',
  confirmPassword: 'password123',
  disabled: true,
  onPasswordChange: (password) => console.log('Password changed:', password),
  onConfirmPasswordChange: (confirmPassword) =>
    console.log('Confirm password changed:', confirmPassword),
};