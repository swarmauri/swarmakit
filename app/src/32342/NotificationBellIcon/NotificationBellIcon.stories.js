import React from 'react';
import NotificationBellIcon from './NotificationBellIcon';

export default {
  title: 'Indicators/NotificationBellIcon',
  component: NotificationBellIcon,
};

const Template = (args) => <NotificationBellIcon {...args} />;

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