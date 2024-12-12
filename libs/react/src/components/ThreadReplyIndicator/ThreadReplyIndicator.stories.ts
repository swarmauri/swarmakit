import React from 'react';
import { Meta, Story } from '@storybook/react';
import ThreadReplyIndicator, { ThreadReplyIndicatorProps } from './ThreadReplyIndicator';

export default {
  title: 'component/Threads/ThreadReplyIndicator',
  component: ThreadReplyIndicator,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ThreadReplyIndicatorProps> = (args) => <ThreadReplyIndicator {...args} />;

export const Default = Template.bind({});
Default.args = {
  visible: true,
};

export const Visible = Template.bind({});
Visible.args = {
  visible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  visible: false,
};

export const Hovered = Template.bind({});
Hovered.args = {
  visible: true,
};

export const Clicked = Template.bind({});
Clicked.args = {
  visible: true,
};