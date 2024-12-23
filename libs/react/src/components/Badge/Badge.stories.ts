import React from 'react';
import { Meta, Story } from '@storybook/react';
import Badge from './Badge';

export default {
  title: 'component/Indicators/Badge',
  component: Badge,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'default',
  label: 'Default Badge',
};

export const Notification = Template.bind({});
Notification.args = {
  state: 'notification',
  label: 'New',
};

export const StatusIndicator = Template.bind({});
StatusIndicator.args = {
  state: 'status-indicator',
  label: 'Active',
};