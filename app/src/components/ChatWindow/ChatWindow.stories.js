// ChatWindow.stories.js
import React from 'react';
import ChatWindow from './ChatWindow';

export default {
  title: 'Chat/ChatWindow',
  component: ChatWindow,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <ChatWindow {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'closed',
};

export const Open = Template.bind({});
Open.args = {
  state: 'open',
};

export const Closed = Template.bind({});
Closed.args = {
  state: 'closed',
};

export const Minimized = Template.bind({});
Minimized.args = {
  state: 'minimized',
};

export const Maximized = Template.bind({});
Maximized.args = {
  state: 'maximized',
};