import React from 'react';
import { Meta, Story } from '@storybook/react';
import SkeletonThreadContainer, { SkeletonThreadContainerProps } from './SkeletonThreadContainer';

export default {
  title: 'component/SkeletonLoaders/SkeletonThreadContainer',
  component: SkeletonThreadContainer,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SkeletonThreadContainerProps> = (args) => <SkeletonThreadContainer {...args} />;

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