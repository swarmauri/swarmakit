import React from 'react';
import UserAvatar from './UserAvatar';

export default {
  title: 'Components/UserAvatar',
  component: UserAvatar,
  argTypes: {
    imageUrl: { control: 'text' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    altText: { control: 'text' },
  },
};

const Template = (args) => <UserAvatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://via.placeholder.com/150',
  size: 'medium',
  altText: 'Default Avatar',
};

export const Small = Template.bind({});
Small.args = {
  imageUrl: 'https://via.placeholder.com/150',
  size: 'small',
  altText: 'Small Avatar',
};

export const Large = Template.bind({});
Large.args = {
  imageUrl: 'https://via.placeholder.com/150',
  size: 'large',
  altText: 'Large Avatar',
};