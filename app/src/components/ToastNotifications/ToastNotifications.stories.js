import React, { useState } from 'react';
import ToastNotifications from './ToastNotifications';

export default {
  title: 'Indicators/ToastNotifications',
  component: ToastNotifications,
};

const Template = (args) => {
  const [dismissed, setDismissed] = useState(false);
  return <ToastNotifications {...args} dismissed={dismissed} onClose={() => setDismissed(true)} />;
};

export const Default = Template.bind({});
Default.args = {
  message: 'This is a default notification.',
  type: 'info',
};

export const Success = Template.bind({});
Success.args = {
  message: 'Operation completed successfully!',
  type: 'success',
};

export const Error = Template.bind({});
Error.args = {
  message: 'An error has occurred.',
  type: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'Warning! Please check your inputs.',
  type: 'warning',
};

export const Info = Template.bind({});
Info.args = {
  message: 'This is an informational message.',
  type: 'info',
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  message: 'This message will disappear.',
  type: 'info',
  dismissed: true,
};