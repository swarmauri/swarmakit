import React from 'react';
import Badge from './Badge';

export default {
  title: 'Indicators/Badge',
  component: Badge,
};

const Template = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'Default',
  type: 'default',
};

export const Notification = Template.bind({});
Notification.args = {
  content: '3',
  type: 'notification',
};

export const StatusIndicator = Template.bind({});
StatusIndicator.args = {
  content: 'Online',
  type: 'status',
};