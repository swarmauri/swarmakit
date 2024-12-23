import React from 'react';
import { Meta, Story } from '@storybook/react';
import ThreadReplyButton, { ThreadReplyButtonProps } from './ThreadReplyButton';

export default {
  title: 'component/Threads/ThreadReplyButton',
  component: ThreadReplyButton,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ThreadReplyButtonProps> = (args) => <ThreadReplyButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  label: 'Reply',
  onClick: () => alert('Button clicked'),
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
  onClick: () => alert('Button clicked again'),
};