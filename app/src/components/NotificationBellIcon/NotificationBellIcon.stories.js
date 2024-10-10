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
};

export const NoNotifications = Template.bind({});
NoNotifications.args = {
  hasNotifications: false,
};

export const NewNotifications = Template.bind({});
NewNotifications.args = {
  hasNotifications: true,
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  hasNotifications: false,
};