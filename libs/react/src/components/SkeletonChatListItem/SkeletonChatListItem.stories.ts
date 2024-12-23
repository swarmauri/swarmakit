import React from 'react';
import { Meta, Story } from '@storybook/react';
import SkeletonChatListItem, { SkeletonChatListItemProps } from './SkeletonChatListItem';

export default {
  title: 'component/SkeletonLoaders/SkeletonChatListItem',
  component: SkeletonChatListItem,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SkeletonChatListItemProps> = (args) => <SkeletonChatListItem {...args} />;

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