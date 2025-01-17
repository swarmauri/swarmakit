import React from 'react';
import { Meta, Story } from '@storybook/react';
import ChatWindow, { ChatWindowProps } from './ChatWindow';

export default {
  title: 'component/Chat/ChatWindow',
  component: ChatWindow,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ChatWindowProps> = (args) => <ChatWindow {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'open',
};

export const Open = Template.bind({});
Open.args = {
  ...Default.args,
  state: 'open',
};

export const Closed = Template.bind({});
Closed.args = {
  ...Default.args,
  state: 'closed',
};

export const Minimized = Template.bind({});
Minimized.args = {
  ...Default.args,
  state: 'minimized',
};

export const Maximized = Template.bind({});
Maximized.args = {
  ...Default.args,
  state: 'maximized',
};