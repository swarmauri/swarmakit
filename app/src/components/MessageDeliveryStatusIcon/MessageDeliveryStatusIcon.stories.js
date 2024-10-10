// MessageDeliveryStatusIcon.stories.js
import React from 'react';
import MessageDeliveryStatusIcon from './MessageDeliveryStatusIcon';

export default {
  title: 'Chat/MessageDeliveryStatusIcon',
  component: MessageDeliveryStatusIcon,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <MessageDeliveryStatusIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: 'sent',
};

export const Sent = Template.bind({});
Sent.args = {
  status: 'sent',
};

export const Delivered = Template.bind({});
Delivered.args = {
  status: 'delivered',
};

export const Failed = Template.bind({});
Failed.args = {
  status: 'failed',
};

export const Read = Template.bind({});
Read.args = {
  status: 'read',
};