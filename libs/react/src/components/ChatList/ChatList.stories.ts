import React from 'react';
import { Meta, Story } from '@storybook/react';
import ChatList, { ChatListProps } from './ChatList';

export default {
  title: 'component/Chat/ChatList',
  component: ChatList,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ChatListProps> = (args) => <ChatList {...args} />;

export const Default = Template.bind({});
Default.args = {
  chats: [],
  onSelect: (id: number) => console.log(`Selected chat id: ${id}`),
};

export const Populated = Template.bind({});
Populated.args = {
  ...Default.args,
  chats: [
    { id: 1, name: 'Alice', lastMessage: 'Hey there!', selected: false },
    { id: 2, name: 'Bob', lastMessage: 'Hello!', selected: false },
    { id: 3, name: 'Charlie', lastMessage: 'How are you?', selected: true },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  ...Default.args,
};

export const Selected = Template.bind({});
Selected.args = {
  ...Populated.args,
  chats: [
    { id: 1, name: 'Alice', lastMessage: 'Hey there!', selected: true },
    { id: 2, name: 'Bob', lastMessage: 'Hello!', selected: false },
    { id: 3, name: 'Charlie', lastMessage: 'How are you?', selected: false },
  ],
};