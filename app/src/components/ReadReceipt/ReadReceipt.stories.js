// ReadReceipt.stories.js
import React from 'react';
import ReadReceipt from './ReadReceipt';

export default {
  title: 'Chat/ReadReceipt',
  component: ReadReceipt,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <ReadReceipt {...args} />;

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