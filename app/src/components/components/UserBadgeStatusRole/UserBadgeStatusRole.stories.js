/** @jsx js */
import React from 'react';
import UserBadgeStatusRole from './UserBadgeStatusRole';

export default {
  title: 'Components/UserBadgeStatusRole',
  component: UserBadgeStatusRole,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    username: { control: 'text' },
    status: { control: { type: 'select', options: ['Online', 'Offline', 'Busy', 'Away'] } },
    role: { control: { type: 'select', options: ['Admin', 'Moderator', 'User'] } },
  },
};

const Template = (args) => <UserBadgeStatusRole {...args} />;

export const Default = Template.bind({});
Default.args = {
  username: 'JohnDoe',
  status: 'Online',
  role: 'User',
};

export const AdminOnline = Template.bind({});
AdminOnline.args = {
  ...Default.args,
  role: 'Admin',
  status: 'Online',
};

export const ModeratorBusy = Template.bind({});
ModeratorBusy.args = {
  ...Default.args,
  role: 'Moderator',
  status: 'Busy',
};

export const UserAway = Template.bind({});
UserAway.args = {
  ...Default.args,
  role: 'User',
  status: 'Away',
};