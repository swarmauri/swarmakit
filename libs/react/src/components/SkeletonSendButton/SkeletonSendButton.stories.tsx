import React from 'react';
import { Meta, Story } from '@storybook/react';
import SkeletonSendButton, { SkeletonSendButtonProps } from './SkeletonSendButton';

export default {
  title: 'component/SkeletonLoaders/SkeletonSendButton',
  component: SkeletonSendButton,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SkeletonSendButtonProps> = (args) => <SkeletonSendButton {...args} />;

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