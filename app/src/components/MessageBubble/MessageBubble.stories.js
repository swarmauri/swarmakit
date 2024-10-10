// MessageBubble.stories.js
import React from 'react';
import MessageBubble from './MessageBubble';

export default {
  title: 'Chat/MessageBubble',
  component: MessageBubble,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <MessageBubble {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'Hello!',
  state: 'sent',
};

export const Sent = Template.bind({});
Sent.args = {
  message: 'Message sent!',
  state: 'sent',
};

export const Received = Template.bind({});
Received.args = {
  message: 'Message received!',
  state: 'received',
};

export const Read = Template.bind({});
Read.args = {
  message: 'Message read!',
  state: 'read',
};

export const Unread = Template.bind({});
Unread.args = {
  message: 'Message unread!',
  state: 'unread',
};