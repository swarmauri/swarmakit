import React from 'react';
import UserBadgeStatusRole from './UserBadgeStatusRole';

export default {
  title: 'Components/UserBadgeStatusRole',
  component: UserBadgeStatusRole,
  argTypes: {
    status: { control: { type: 'select', options: ['online', 'offline', 'busy'] } },
    role: { control: 'text' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args) => <UserBadgeStatusRole {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: 'offline',
  role: 'User',
  size: 'medium',
};

export const Online = Template.bind({});
Online.args = {
  status: 'online',
  role: 'Admin',
  size: 'medium',
};

export const Busy = Template.bind({});
Busy.args = {
  status: 'busy',
  role: 'Moderator',
  size: 'large',
};