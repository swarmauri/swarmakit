import React from 'react';
import { Meta, Story } from '@storybook/react';
import ReadReceipt, { ReadReceiptProps } from './ReadReceipt';

export default {
  title: 'component/Chat/ReadReceipt',
  component: ReadReceipt,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ReadReceiptProps> = (args) => <ReadReceipt {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: 'unseen',
};

export const Seen = Template.bind({});
Seen.args = {
  ...Default.args,
  status: 'seen',
};

export const Unseen = Template.bind({});
Unseen.args = {
  ...Default.args,
  status: 'unseen',
};

export const Delivered = Template.bind({});
Delivered.args = {
  ...Default.args,
  status: 'delivered',
};

export const Failed = Template.bind({});
Failed.args = {
  ...Default.args,
  status: 'failed',
};