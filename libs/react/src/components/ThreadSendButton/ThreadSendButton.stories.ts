import React from 'react';
import { Meta, Story } from '@storybook/react';
import ThreadSendButton, { ThreadSendButtonProps } from './ThreadSendButton';

export default {
  title: 'component/Threads/ThreadSendButton',
  component: ThreadSendButton,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ThreadSendButtonProps> = (args) => <ThreadSendButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  onClick: () => alert('Message sent!'),
};

export const Enabled = Template.bind({});
Enabled.args = {
  ...Default.args,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const Hovered = Template.bind({});
Hovered.args = {
  ...Default.args,
};

export const Clicked = Template.bind({});
Clicked.args = {
  ...Default.args,
};