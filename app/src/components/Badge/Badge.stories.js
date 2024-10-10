import React from 'react';
import Badge from './Badge';

export default {
  title: 'Indicators/Badge',
  component: Badge,
};

const Template = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  children: 'Default Badge',
};

export const Notification = Template.bind({});
Notification.args = {
  variant: 'notification',
  children: 'New Notification',
};

export const StatusIndicator = Template.bind({});
StatusIndicator.args = {
  variant: 'status',
  children: 'Active',
};