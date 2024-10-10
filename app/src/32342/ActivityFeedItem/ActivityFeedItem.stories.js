import React from 'react';
import ActivityFeedItem from './ActivityFeedItem';

export default {
  title: 'Components/ActivityFeedItem',
  component: ActivityFeedItem,
};

const Template = (args) => <ActivityFeedItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  avatarUrl: 'https://via.placeholder.com/40',
  username: 'John Doe',
  activity: 'liked your post',
  timestamp: '2 hours ago',
};

export const Commented = Template.bind({});
Commented.args = {
  avatarUrl: 'https://via.placeholder.com/40',
  username: 'Jane Smith',
  activity: 'commented on your photo',
  timestamp: '30 minutes ago',
};

export const Shared = Template.bind({});
Shared.args = {
  avatarUrl: 'https://via.placeholder.com/40',
  username: 'Emily Johnson',
  activity: 'shared your post',
  timestamp: '15 minutes ago',
};