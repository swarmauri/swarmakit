import React from 'react';
import { Meta, Story } from '@storybook/react';
import SkeletonReactionButton, { SkeletonReactionButtonProps } from './SkeletonReactionButton';

export default {
  title: 'component/SkeletonLoaders/SkeletonReactionButton',
  component: SkeletonReactionButton,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SkeletonReactionButtonProps> = (args) => <SkeletonReactionButton {...args} />;

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