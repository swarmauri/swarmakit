import React from 'react';
import ToastNotifications from './ToastNotifications';

export default {
  title: 'Indicators/ToastNotifications',
  component: ToastNotifications,
};

const Template = (args) => <ToastNotifications {...args} />;

export const Default = Template.bind({});
Default.args = {
  notifications: [
    { message: 'This is a success message', type: 'success' },
    { message: 'This is an error message', type: 'error' },
    { message: 'This is a warning message', type: 'warning' },
    { message: 'This is an info message', type: 'info' },
  ],
};

export const Success = Template.bind({});
Success.args = {
  notifications: [{ message: 'Operation successful', type: 'success' }],
};

export const Error = Template.bind({});
Error.args = {
  notifications: [{ message: 'An error occurred', type: 'error' }],
};

export const Warning = Template.bind({});
Warning.args = {
  notifications: [{ message: 'This is a warning', type: 'warning' }],
};

export const Info = Template.bind({});
Info.args = {
  notifications: [{ message: 'Some information for you', type: 'info' }],
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  notifications: [],
};