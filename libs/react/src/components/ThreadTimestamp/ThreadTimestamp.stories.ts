import React from 'react';
import { Meta, Story } from '@storybook/react';
import ThreadTimestamp, { ThreadTimestampProps } from './ThreadTimestamp';

export default {
  title: 'component/Threads/ThreadTimestamp',
  component: ThreadTimestamp,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ThreadTimestampProps> = (args) => <ThreadTimestamp {...args} />;

export const Default = Template.bind({});
Default.args = {
  timestamp: '2023-10-01 12:34 PM',
  visible: true,
};

export const Displayed = Template.bind({});
Displayed.args = {
  ...Default.args,
  visible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  ...Default.args,
  visible: false,
};