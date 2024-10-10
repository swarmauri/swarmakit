/** @jsx js */
import React, { useState } from 'react';
import SystemStatusNotificationEGApiDowntime from './SystemStatusNotificationEGApiDowntime';

export default {
  title: 'Components/SystemStatusNotificationEGApiDowntime',
  component: SystemStatusNotificationEGApiDowntime,
  parameters: {
    layout: 'centered',
    viewport: {
      defaultViewport: 'responsive',
    },
  },
  argTypes: {
    message: { control: 'text' },
    isVisible: { control: 'boolean' },
    onClose: { action: 'closed' },
  },
};

const Template = (args) => {
  const [isVisible, setIsVisible] = useState(args.isVisible);

  return (
    <SystemStatusNotificationEGApiDowntime
      {...args}
      isVisible={isVisible}
      onClose={() => {
        setIsVisible(false);
        args.onClose();
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  message: 'The EG API is currently experiencing downtime.',
  isVisible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  message: 'The EG API is currently experiencing downtime.',
  isVisible: false,
};