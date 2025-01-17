import React from 'react';
import { Meta, Story } from '@storybook/react';
import ThreadMessageInputBox, { ThreadMessageInputBoxProps } from './ThreadMessageInputBox';

export default {
  title: 'component/Threads/ThreadMessageInputBox',
  component: ThreadMessageInputBox,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ThreadMessageInputBoxProps> = (args) => <ThreadMessageInputBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Type a message...',
  onSend: (message) => alert(`Message sent: ${message}`),
};

export const Focused = Template.bind({});
Focused.args = {
  ...Default.args,
};

export const Unfocused = Template.bind({});
Unfocused.args = {
  ...Default.args,
};

export const Typing = Template.bind({});
Typing.args = {
  ...Default.args,
};

export const Empty = Template.bind({});
Empty.args = {
  ...Default.args,
};