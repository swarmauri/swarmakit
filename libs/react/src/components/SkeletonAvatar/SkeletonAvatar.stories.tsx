import React from 'react';
import { Meta, Story } from '@storybook/react';
import SkeletonAvatar, { SkeletonAvatarProps } from './SkeletonAvatar';

export default {
  title: 'component/SkeletonLoaders/SkeletonAvatar',
  component: SkeletonAvatar,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SkeletonAvatarProps> = (args) => <SkeletonAvatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'loading',
};

export const Loading = Template.bind({});
Loading.args = {
  state: 'loading',
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
};