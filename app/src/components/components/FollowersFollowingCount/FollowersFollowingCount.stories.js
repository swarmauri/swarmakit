/** @jsx js */
import React from 'react';
import FollowersFollowingCount from './FollowersFollowingCount';

export default {
  title: 'Components/FollowersFollowingCount',
  component: FollowersFollowingCount,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    followers: { control: 'number' },
    following: { control: 'number' },
  },
};

const Template = (args) => <FollowersFollowingCount {...args} />;

export const Default = Template.bind({});
Default.args = {
  followers: 1200,
  following: 300,
};

export const ZeroFollowers = Template.bind({});
ZeroFollowers.args = {
  followers: 0,
  following: 300,
};

export const ZeroFollowing = Template.bind({});
ZeroFollowing.args = {
  followers: 1200,
  following: 0,
};