import React from 'react';
import { Meta, Story } from '@storybook/react';
import ThreadUnreadMessageCounter, { ThreadUnreadMessageCounterProps } from './ThreadUnreadMessageCounter';

export default {
  title: 'component/Threads/ThreadUnreadMessageCounter',
  component: ThreadUnreadMessageCounter,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ThreadUnreadMessageCounterProps> = (args) => <ThreadUnreadMessageCounter {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 0,
  visible: true,
};

export const Displayed = Template.bind({});
Displayed.args = {
  count: 5,
  visible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  count: 5,
  visible: false,
};

export const Incremented = Template.bind({});
Incremented.args = {
  count: 10,
  visible: true,
};

export const Decremented = Template.bind({});
Decremented.args = {
  count: 2,
  visible: true,
};