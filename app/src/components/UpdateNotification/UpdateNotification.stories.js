/** @jsx js */
import React, { useState } from 'react';
import UpdateNotification from './UpdateNotification';

export default {
  title: 'Components/UpdateNotification',
  component: UpdateNotification,
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
    <UpdateNotification
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
  message: 'A new update is available!',
  isVisible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  message: 'A new update is available!',
  isVisible: false,
};