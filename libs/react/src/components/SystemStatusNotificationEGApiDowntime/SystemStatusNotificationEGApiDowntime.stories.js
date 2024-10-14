import React from 'react';
import SystemStatusNotificationEGApiDowntime from './SystemStatusNotificationEGApiDowntime';

export default {
  title: 'Components/SystemStatusNotificationEGApiDowntime',
  component: SystemStatusNotificationEGApiDowntime,
  argTypes: {
    message: { control: 'text' },
    isVisible: { control: 'boolean' },
    onAcknowledge: { action: 'acknowledged' },
  },
};

const Template = (args) => <SystemStatusNotificationEGApiDowntime {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'The EG API is currently down. Our team is working on it.',
  isVisible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  message: 'This notification should not be visible.',
  isVisible: false,
};