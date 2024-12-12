import React from 'react';
import { Meta, Story } from '@storybook/react';
import SkeletonScrollButton, { SkeletonScrollButtonProps } from './SkeletonScrollButton';

export default {
  title: 'component/SkeletonLoaders/SkeletonScrollButton',
  component: SkeletonScrollButton,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SkeletonScrollButtonProps> = (args) => <SkeletonScrollButton {...args} />;

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