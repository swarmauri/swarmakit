import Toast from './Toast.svelte';

export default {
  title: 'Indicators/Toast',
  component: Toast,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    message: 'This is a toast message',
    type: 'info',
    visible: true,
  },
};

export const Success = {
  args: {
    message: 'Operation successful!',
    type: 'success',
    visible: true,
  },
};

export const Error = {
  args: {
    message: 'Something went wrong!',
    type: 'error',
    visible: true,
  },
};

export const Warning = {
  args: {
    message: 'Please be cautious!',
    type: 'warning',
    visible: true,
  },
};

export const Info = {
  args: {
    message: 'This is some information.',
    type: 'info',
    visible: true,
  },
};

export const Dismissed = {
  args: {
    message: 'This is a dismissed toast.',
    type: 'info',
    visible: false,
  },
};