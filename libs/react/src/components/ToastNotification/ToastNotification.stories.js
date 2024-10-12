import React from 'react';
import ToastNotification from './ToastNotification';

export default {
  title: 'Components/ToastNotification',
  component: ToastNotification,
};

const Template = (args) => <ToastNotification {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'This is a default toast message.',
  type: 'info',
  onClose: () => alert('Toast closed'),
};

export const Success = Template.bind({});
Success.args = {
  message: 'Operation completed successfully!',
  type: 'success',
  onClose: () => alert('Toast closed'),
};

export const Error = Template.bind({});
Error.args = {
  message: 'An error occurred!',
  type: 'error',
  onClose: () => alert('Toast closed'),
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'This is a warning!',
  type: 'warning',
  onClose: () => alert('Toast closed'),
};