import React from 'react';
import { Meta, Story } from '@storybook/react';
import ThreadReadReceipt, { ThreadReadReceiptProps } from './ThreadReadReceipt';

export default {
  title: 'component/Threads/ThreadReadReceipt',
  component: ThreadReadReceipt,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ThreadReadReceiptProps> = (args) => <ThreadReadReceipt {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: 'unseen',
};

export const Seen = Template.bind({});
Seen.args = {
  status: 'seen',
};

export const Unseen = Template.bind({});
Unseen.args = {
  status: 'unseen',
};

export const Delivered = Template.bind({});
Delivered.args = {
  status: 'delivered',
};

export const Failed = Template.bind({});
Failed.args = {
  status: 'failed',
};