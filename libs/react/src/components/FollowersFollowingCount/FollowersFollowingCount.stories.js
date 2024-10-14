import React from 'react';
import FollowersFollowingCount from './FollowersFollowingCount';

export default {
  title: 'Components/FollowersFollowingCount',
  component: FollowersFollowingCount,
  argTypes: {
    followers: { control: 'number' },
    following: { control: 'number' },
  },
};

const Template = (args) => <FollowersFollowingCount {...args} />;

export const Default = Template.bind({});
Default.args = {
  followers: 120,
  following: 80,
};

export const HighFollowersLowFollowing = Template.bind({});
HighFollowersLowFollowing.args = {
  followers: 1000,
  following: 50,
};

export const LowFollowersHighFollowing = Template.bind({});
LowFollowersHighFollowing.args = {
  followers: 50,
  following: 300,
};