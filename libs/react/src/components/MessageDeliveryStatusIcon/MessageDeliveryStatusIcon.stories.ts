import React from 'react';
import { Meta, Story } from '@storybook/react';
import MessageDeliveryStatusIcon, { MessageDeliveryStatusIconProps } from './MessageDeliveryStatusIcon';

export default {
  title: 'component/Chat/MessageDeliveryStatusIcon',
  component: MessageDeliveryStatusIcon,
  tags: ['autodocs'],
} as Meta;

const Template: Story<MessageDeliveryStatusIconProps> = (args) => <MessageDeliveryStatusIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: 'sent',
};

export const Sent = Template.bind({});
Sent.args = {
  ...Default.args,
  status: 'sent',
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

export const Read = Template.bind({});
Read.args = {
  ...Default.args,
  status: 'read',
};