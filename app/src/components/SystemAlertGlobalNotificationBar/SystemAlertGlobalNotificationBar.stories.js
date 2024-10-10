import React from 'react';
import SystemAlertGlobalNotificationBar from './SystemAlertGlobalNotificationBar';

export default {
  title: 'Indicators/SystemAlertGlobalNotificationBar',
  component: SystemAlertGlobalNotificationBar,
};

const Template = (args) => <SystemAlertGlobalNotificationBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'This is an info alert',
  type: 'info',
};

export const Success = Template.bind({});
Success.args = {
  message: 'This is a success alert',
  type: 'success',
};

export const Error = Template.bind({});
Error.args = {
  message: 'This is an error alert',
  type: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'This is a warning alert',
  type: 'warning',
};

export const Info = Template.bind({});
Info.args = {
  message: 'This is an info alert',
  type: 'info',
};