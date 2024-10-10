// ChatList.stories.js
import React from 'react';
import ChatList from './ChatList';

export default {
  title: 'Chat/ChatList',
  component: ChatList,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <ChatList {...args} />;

export const Default = Template.bind({});
Default.args = {
  chats: [
    { id: '1', name: 'Chat 1' },
    { id: '2', name: 'Chat 2' },
  ],
  selectedChatId: null,
};

export const Populated = Template.bind({});
Populated.args = {
  chats: [
    { id: '1', name: 'Chat 1' },
    { id: '2', name: 'Chat 2' },
    { id: '3', name: 'Chat 3' },
  ],
  selectedChatId: null,
};

export const Empty = Template.bind({});
Empty.args = {
  chats: [],
  selectedChatId: null,
};

export const Selected = Template.bind({});
Selected.args = {
  chats: [
    { id: '1', name: 'Chat 1' },
    { id: '2', name: 'Chat 2' },
    { id: '3', name: 'Chat 3' },
  ],
  selectedChatId: '2',
};