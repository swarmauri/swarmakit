import React from 'react';
import PushNotificationBanner from './PushNotificationBanner';

export default {
  title: 'Components/PushNotificationBanner',
  component: PushNotificationBanner,
};

const Template = (args) => <PushNotificationBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'This is an informational notification.',
  type: 'info',
  onClose: () => alert('Notification closed'),
};

export const Success = Template.bind({});
Success.args = {
  message: 'Operation completed successfully!',
  type: 'success',
  onClose: () => alert('Notification closed'),
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'Please be aware of the changes.',
  type: 'warning',
  onClose: () => alert('Notification closed'),
};

export const Error = Template.bind({});
Error.args = {
  message: 'An error has occurred!',
  type: 'error',
  onClose: () => alert('Notification closed'),
};