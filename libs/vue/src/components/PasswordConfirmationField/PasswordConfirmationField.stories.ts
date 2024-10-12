import PasswordConfirmationField from './PasswordConfirmationField.vue';

export default {
  title: 'Forms/PasswordConfirmationField',
  component: PasswordConfirmationField,
  tags: ['autodocs'],
  argTypes: {
    passwordLabel: { control: 'text' },
    confirmPasswordLabel: { control: 'text' },
    passwordId: { control: 'text' },
    confirmPasswordId: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
  },
};

const Template = (args: any) => ({
  components: { PasswordConfirmationField },
  setup() {
    return { args };
  },
  template: '<PasswordConfirmationField v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  passwordLabel: 'Password',
  confirmPasswordLabel: 'Confirm Password',
  passwordId: 'default-password',
  confirmPasswordId: 'default-confirm-password',
  disabled: false,
  error: '',
};

export const Matching = Template.bind({});
Matching.args = {
  passwordLabel: 'Password',
  confirmPasswordLabel: 'Confirm Password',
  passwordId: 'matching-password',
  confirmPasswordId: 'matching-confirm-password',
  disabled: false,
  error: '',
};

export const NotMatching = Template.bind({});
NotMatching.args = {
  passwordLabel: 'Password',
  confirmPasswordLabel: 'Confirm Password',
  passwordId: 'not-matching-password',
  confirmPasswordId: 'not-matching-confirm-password',
  disabled: false,
  error: 'Passwords do not match',
};

export const Disabled = Template.bind({});
Disabled.args = {
  passwordLabel: 'Password',
  confirmPasswordLabel: 'Confirm Password',
  passwordId: 'disabled-password',
  confirmPasswordId: 'disabled-confirm-password',
  disabled: true,
  error: '',
};