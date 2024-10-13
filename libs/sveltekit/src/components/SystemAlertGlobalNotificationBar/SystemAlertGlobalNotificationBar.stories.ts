import SystemAlertGlobalNotificationBar from './SystemAlertGlobalNotificationBar.svelte';

export default {
  title: 'Indicators/SystemAlertGlobalNotificationBar',
  component: SystemAlertGlobalNotificationBar,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    message: 'This is an information alert',
    type: 'info',
  },
};

export const Success = {
  args: {
    message: 'Operation completed successfully',
    type: 'success',
  },
};

export const Error = {
  args: {
    message: 'An error occurred during the operation',
    type: 'error',
  },
};

export const Warning = {
  args: {
    message: 'Warning: Please check your input',
    type: 'warning',
  },
};

export const Info = {
  args: {
    message: 'This is an information alert',
    type: 'info',
  },
};