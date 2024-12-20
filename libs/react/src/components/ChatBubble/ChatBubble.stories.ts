import React from 'react';
import { Meta, Story } from '@storybook/react';
import ChatBubble, { ChatBubbleProps } from './ChatBubble';

export default {
  title: 'component/Miscellaneous/ChatBubble',
  component: ChatBubble,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ChatBubbleProps> = (args) => <ChatBubble {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'This is a chat bubble',
  status: 'unread',
};

export const Read = Template.bind({});
Read.args = {
  ...Default.args,
  status: 'read',
};

export const Unread = Template.bind({});
Unread.args = {
  ...Default.args,
  status: 'unread',
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};

Hover.parameters = {
  pseudo: { hover: true },
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
};

Active.parameters = {
  pseudo: { active: true },
};