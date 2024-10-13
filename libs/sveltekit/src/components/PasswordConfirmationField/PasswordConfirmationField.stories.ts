import PasswordConfirmationField from './PasswordConfirmationField.svelte';

export default {
  title: 'Forms/PasswordConfirmationField',
  component: PasswordConfirmationField,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    password: '',
    confirmPassword: '',
    disabled: false,
  },
};

export const Matching = {
  args: {
    password: 'password123',
    confirmPassword: 'password123',
    disabled: false,
  },
};

export const NotMatching = {
  args: {
    password: 'password123',
    confirmPassword: 'password321',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    password: 'password123',
    confirmPassword: 'password123',
    disabled: true,
  },
};