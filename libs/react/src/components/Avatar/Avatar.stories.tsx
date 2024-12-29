import React from 'react';
import { Meta, Story } from '@storybook/react';
import Avatar, { AvatarProps } from './Avatar';

export default {
  title: 'component/Miscellaneous/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  altText: 'User Avatar',
  size: 'medium',
};

export const WithImage = Template.bind({});
WithImage.args = {
  ...Default.args,
  imageUrl: 'https://via.placeholder.com/150',
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  ...Default.args,
};

export const Grouped = () => (
  <div style={{ display: 'flex', gap: '10px' }}>
    <Avatar imageUrl="https://via.placeholder.com/150" altText="User 1" size="small" />
    <Avatar altText="User 2" size="medium" />
    <Avatar imageUrl="https://via.placeholder.com/150" altText="User 3" size="large" />
  </div>
);