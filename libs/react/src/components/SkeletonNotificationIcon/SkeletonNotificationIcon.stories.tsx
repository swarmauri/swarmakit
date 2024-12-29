import React from 'react';
import { Meta, Story } from '@storybook/react';
import SkeletonNotificationIcon, { SkeletonNotificationIconProps } from './SkeletonNotificationIcon';

export default {
  title: 'component/SkeletonLoaders/SkeletonNotificationIcon',
  component: SkeletonNotificationIcon,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SkeletonNotificationIconProps> = (args) => <SkeletonNotificationIcon {...args} />;

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