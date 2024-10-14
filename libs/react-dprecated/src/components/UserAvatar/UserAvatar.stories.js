// UserAvatar.stories.js
import React from 'react';
import UserAvatar from './UserAvatar';

export default {
  title: 'Chat/UserAvatar',
  component: UserAvatar,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <UserAvatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: 'online',
  imageUrl: 'https://via.placeholder.com/150',
  onClick: () => {},
};

export const Online = Template.bind({});
Online.args = {
  status: 'online',
  imageUrl: 'https://via.placeholder.com/150',
  onClick: () => {},
};

export const Offline = Template.bind({});
Offline.args = {
  status: 'offline',
  imageUrl: 'https://via.placeholder.com/150',
  onClick: () => {},
};

export const Active = Template.bind({});
Active.args = {
  status: 'active',
  imageUrl: 'https://via.placeholder.com/150',
  onClick: () => {},
};

export const Away = Template.bind({});
Away.args = {
  status: 'away',
  imageUrl: 'https://via.placeholder.com/150',
  onClick: () => {},
};

export const Busy = Template.bind({});
Busy.args = {
  status: 'busy',
  imageUrl: 'https://via.placeholder.com/150',
  onClick: () => {},
};