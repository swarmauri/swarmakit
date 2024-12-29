import React from 'react';
import { Meta, Story } from '@storybook/react';
import SkeletonMessageBubble, { SkeletonMessageBubbleProps } from './SkeletonMessageBubble';

export default {
  title: 'component/SkeletonLoaders/SkeletonMessageBubble',
  component: SkeletonMessageBubble,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SkeletonMessageBubbleProps> = (args) => <SkeletonMessageBubble {...args} />;

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