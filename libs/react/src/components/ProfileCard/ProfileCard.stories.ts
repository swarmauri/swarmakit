import React from 'react';
import { Meta, Story } from '@storybook/react';
import ProfileCard, { ProfileCardProps } from './ProfileCard';

export default {
  title: 'component/Card Types/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ProfileCardProps> = (args) => <ProfileCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  avatarUrl: 'https://via.placeholder.com/150',
  name: 'John Doe',
  additionalInfo: 'Software Engineer at XYZ Corp',
};

export const Hovered = Template.bind({});
Hovered.args = {
  avatarUrl: 'https://via.placeholder.com/150',
  name: 'Jane Smith',
  additionalInfo: 'Product Manager at ABC Inc',
};

export const WithStatus = Template.bind({});
WithStatus.args = {
  avatarUrl: 'https://via.placeholder.com/150',
  name: 'Alice Johnson',
  additionalInfo: 'UX Designer at Creative Studio',
  status: 'online',
};