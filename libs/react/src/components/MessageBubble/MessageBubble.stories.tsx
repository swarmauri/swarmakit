import React from 'react';
import { Meta, Story } from '@storybook/react';
import MessageBubble, { MessageBubbleProps } from './MessageBubble';

export default {
  title: 'component/Chat/MessageBubble',
  component: MessageBubble,
  tags: ['autodocs'],
} as Meta;

const Template: Story<MessageBubbleProps> = (args) => <MessageBubble {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'This is a default message bubble.',
};

export const Sent = Template.bind({});
Sent.args = {
  message: 'This message has been sent.',
  status: 'sent',
  isSender: true,
};

export const Received = Template.bind({});
Received.args = {
  message: 'This message has been received.',
  status: 'received',
  isSender: false,
};

export const Read = Template.bind({});
Read.args = {
  message: 'This message has been read.',
  status: 'read',
  isSender: false,
};

export const Unread = Template.bind({});
Unread.args = {
  message: 'This message is unread.',
  status: 'unread',
  isSender: false,
};