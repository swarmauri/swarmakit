import React, { useState } from 'react';
import Notification from './Notification';

export default {
  title: 'Overlays/Notification',
  component: Notification,
};

const Template = (args) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <Notification
      {...args}
      onDismiss={() => setDismissed(true)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  type: 'info',
  message: 'This is an information notification.',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  message: 'This is a success notification.',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  message: 'This is an error notification.',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  message: 'This is a warning notification.',
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  message: 'This is an information notification.',
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  type: 'info',
  message: 'This notification will be dismissed.',
  onDismiss: () => {},
};