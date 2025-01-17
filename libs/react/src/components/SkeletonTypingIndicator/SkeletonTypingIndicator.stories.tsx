import React from 'react';
import { Meta, Story } from '@storybook/react';
import SkeletonTypingIndicator, { SkeletonTypingIndicatorProps } from './SkeletonTypingIndicator';

export default {
  title: 'component/SkeletonLoaders/SkeletonTypingIndicator',
  component: SkeletonTypingIndicator,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SkeletonTypingIndicatorProps> = (args) => <SkeletonTypingIndicator {...args} />;

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