import React from 'react';
import { Meta, Story } from '@storybook/react';
import ThreadMessageBubble, { ThreadMessageBubbleProps } from './ThreadMessageBubble';

export default {
  title: 'component/Threads/ThreadMessageBubble',
  component: ThreadMessageBubble,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ThreadMessageBubbleProps> = (args) => <ThreadMessageBubble {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'sent',
  message: 'Hello, how are you?',
  timestamp: '10:30 AM',
  isSender: true,
};

export const Sent = Template.bind({});
Sent.args = {
  ...Default.args,
  state: 'sent',
};

export const Received = Template.bind({});
Received.args = {
  ...Default.args,
  state: 'received',
  isSender: false,
};

export const Read = Template.bind({});
Read.args = {
  ...Default.args,
  state: 'read',
};

export const Unread = Template.bind({});
Unread.args = {
  ...Default.args,
  state: 'unread',
};