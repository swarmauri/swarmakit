import React from 'react';
import { Meta, Story } from '@storybook/react';
import MessageInputBox, { MessageInputBoxProps } from './MessageInputBox';

export default {
  title: 'component/Chat/MessageInputBox',
  component: MessageInputBox,
  tags: ['autodocs'],
} as Meta;

const Template: Story<MessageInputBoxProps> = (args) => <MessageInputBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Type a message...',
};

export const Focused = Template.bind({});
Focused.args = {
  placeholder: 'Type a message...',
};

export const Unfocused = Template.bind({});
Unfocused.args = {
  placeholder: 'Type a message...',
};

export const Typing = Template.bind({});
Typing.args = {
  placeholder: 'Type a message...',
  onChange: (value) => console.log('Typing:', value),
};

export const Empty = Template.bind({});
Empty.args = {
  placeholder: 'Type a message...',
};