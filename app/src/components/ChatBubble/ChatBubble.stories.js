import React from 'react';
import ChatBubble from './ChatBubble';

export default {
  title: 'Miscellaneous/ChatBubble',
  component: ChatBubble,
};

const Template = (args) => <ChatBubble {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'Hello, this is a chat bubble!',
};

export const Read = Template.bind({});
Read.args = {
  message: 'This message has been read.',
  status: 'read',
};

export const Unread = Template.bind({});
Unread.args = {
  message: 'This is an unread message.',
  status: 'unread',
};

export const Hover = Template.bind({});
Hover.args = {
  message: 'Hover over this message.',
  status: 'unread',
};

export const Active = Template.bind({});
Active.args = {
  message: 'This message is active.',
  status: 'unread',
  isActive: true,
};