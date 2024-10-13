import ValidationMessages from './ValidationMessages.svelte';

export default {
  title: 'Forms/ValidationMessages',
  component: ValidationMessages,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    message: 'This is a validation message.',
    type: 'success',
  },
};

export const Success = {
  args: {
    message: 'This is a success message.',
    type: 'success',
  },
};

export const Error = {
  args: {
    message: 'This is an error message.',
    type: 'error',
  },
};

export const Warning = {
  args: {
    message: 'This is a warning message.',
    type: 'warning',
  },
};