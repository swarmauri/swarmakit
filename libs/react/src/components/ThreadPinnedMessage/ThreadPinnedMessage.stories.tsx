import React from 'react';
import { Meta, Story } from '@storybook/react';
import ThreadPinnedMessage, { ThreadPinnedMessageProps } from './ThreadPinnedMessage';

export default {
  title: 'component/Threads/ThreadPinnedMessage',
  component: ThreadPinnedMessage,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ThreadPinnedMessageProps> = (args) => <ThreadPinnedMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'unpinned',
  message: 'This is a default pinned message.',
};

export const Pinned = Template.bind({});
Pinned.args = {
  state: 'pinned',
  message: 'This message is pinned.',
};

export const Unpinned = Template.bind({});
Unpinned.args = {
  state: 'unpinned',
  message: 'This message is unpinned.',
};

export const Visible = Template.bind({});
Visible.args = {
  state: 'visible',
  message: 'This message is visible.',
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
  message: 'This message is hidden.',
};