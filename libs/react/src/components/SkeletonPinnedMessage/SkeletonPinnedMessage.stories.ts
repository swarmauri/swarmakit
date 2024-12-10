import React from 'react';
import { Meta, Story } from '@storybook/react';
import SkeletonPinnedMessage, { SkeletonPinnedMessageProps } from './SkeletonPinnedMessage';

export default {
  title: 'component/SkeletonLoaders/SkeletonPinnedMessage',
  component: SkeletonPinnedMessage,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SkeletonPinnedMessageProps> = (args) => <SkeletonPinnedMessage {...args} />;

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