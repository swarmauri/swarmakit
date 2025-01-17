import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Badge, { BadgeProps } from './Badge';

export default {
  title: 'component/Indicators/Badge',
  component: Badge,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />;

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