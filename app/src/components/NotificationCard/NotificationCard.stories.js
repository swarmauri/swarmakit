import React from 'react';
import NotificationCard from './NotificationCard';

export default {
  title: 'Components/NotificationCard',
  component: NotificationCard,
  argTypes: {
    onClose: { action: 'closed' },
  },
};

const Template = (args) => <NotificationCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'info',
  message: 'This is an information message.',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  message: 'This is a success message.',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  message: 'This is a warning message.',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  message: 'This is an error message.',
};