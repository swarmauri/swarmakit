import React from 'react';
import { Meta, Story } from '@storybook/react';
import SystemAlertGlobalNotificationBar from './SystemAlertGlobalNotificationBar';

export default {
  title: 'component/Indicators/SystemAlertGlobalNotificationBar',
  component: SystemAlertGlobalNotificationBar,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SystemAlertGlobalNotificationBarProps> = (args) => <SystemAlertGlobalNotificationBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'This is a default notification',
  type: 'info',
};

export const Success = Template.bind({});
Success.args = {
  message: 'Operation completed successfully!',
  type: 'success',
};

export const Error = Template.bind({});
Error.args = {
  message: 'An error occurred while processing your request.',
  type: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'Please be aware of the following warnings.',
  type: 'warning',
};

export const Info = Template.bind({});
Info.args = {
  message: 'Here is some important information.',
  type: 'info',
};