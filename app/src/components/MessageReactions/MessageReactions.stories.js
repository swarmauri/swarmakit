// MessageReactions.stories.js
import React from 'react';
import MessageReactions from './MessageReactions';

export default {
  title: 'Chat/MessageReactions',
  component: MessageReactions,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <MessageReactions {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'available',
  reactions: ['👍', '❤️', '😂'],
};

export const Available = Template.bind({});
Available.args = {
  state: 'available',
  reactions: ['👍', '❤️', '😂'],
};

export const Unavailable = Template.bind({});
Unavailable.args = {
  state: 'unavailable',
  reactions: [],
};

export const Hovered = Template.bind({});
Hovered.args = {
  state: 'hovered',
  reactions: ['👍', '❤️', '😂'],
};

export const Clicked = Template.bind({});
Clicked.args = {
  state: 'clicked',
  reactions: ['👍', '❤️', '😂'],
};