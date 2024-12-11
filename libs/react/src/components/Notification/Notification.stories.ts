import React from 'react';
import { Meta, Story } from '@storybook/react';
import Notification, { NotificationProps } from './Notification';

export default {
  title: 'component/Overlays/Notification',
  component: Notification,
  tags: ['autodocs'],
} as Meta;

const Template: Story<NotificationProps> = (args) => <Notification {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'This is a notification message.',
  type: 'info',
  onDismiss: () => console.log('Notification dismissed'),
};

export const Success = Template.bind({});
Success.args = {
  message: 'Operation was successful.',
  type: 'success',
  onDismiss: () => console.log('Notification dismissed'),
};

export const Error = Template.bind({});
Error.args = {
  message: 'An error occurred.',
  type: 'error',
  onDismiss: () => console.log('Notification dismissed'),
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'This is a warning.',
  type: 'warning',
  onDismiss: () => console.log('Notification dismissed'),
};

export const Info = Template.bind({});
Info.args = {
  message: 'This is an informational message.',
  type: 'info',
  onDismiss: () => console.log('Notification dismissed'),
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  message: 'This notification is dismissed.',
  type: 'info',
  onDismiss: () => console.log('Notification dismissed'),
  dismissed: true,
};