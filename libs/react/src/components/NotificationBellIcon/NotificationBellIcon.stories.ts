import React from 'react';
import { Meta, Story } from '@storybook/react';
import NotificationBellIcon from './NotificationBellIcon';

export default {
  title: 'component/Indicators/NotificationBellIcon',
  component: NotificationBellIcon,
  tags: ['autodocs'],
} as Meta;

const Template: Story<NotificationBellIconProps> = (args) => (
  <NotificationBellIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  hasNotifications: false,
  dismissed: false,
};

export const NoNotifications = Template.bind({});
NoNotifications.args = {
  hasNotifications: false,
  dismissed: false,
};

export const NewNotifications = Template.bind({});
NewNotifications.args = {
  hasNotifications: true,
  dismissed: false,
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  hasNotifications: true,
  dismissed: true,
};