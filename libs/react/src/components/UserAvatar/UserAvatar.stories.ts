import React from 'react';
import { Meta, Story } from '@storybook/react';
import UserAvatar, { UserAvatarProps } from './UserAvatar';

export default {
  title: 'component/Chat/UserAvatar',
  component: UserAvatar,
  tags: ['autodocs'],
} as Meta;

const Template: Story<UserAvatarProps> = (args) => <UserAvatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'User Avatar',
  status: 'online',
};

export const Online = Template.bind({});
Online.args = {
  ...Default.args,
  status: 'online',
};

export const Offline = Template.bind({});
Offline.args = {
  ...Default.args,
  status: 'offline',
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  status: 'active',
};

export const Away = Template.bind({});
Away.args = {
  ...Default.args,
  status: 'away',
};

export const Busy = Template.bind({});
Busy.args = {
  ...Default.args,
  status: 'busy',
};