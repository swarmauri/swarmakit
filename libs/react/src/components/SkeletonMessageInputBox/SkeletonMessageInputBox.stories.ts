import React from 'react';
import { Meta, Story } from '@storybook/react';
import SkeletonMessageInputBox, { SkeletonMessageInputBoxProps } from './SkeletonMessageInputBox';

export default {
  title: 'component/SkeletonLoaders/SkeletonMessageInputBox',
  component: SkeletonMessageInputBox,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SkeletonMessageInputBoxProps> = (args) => <SkeletonMessageInputBox {...args} />;

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