/** @jsx js */
import React, { useState } from 'react';
import SuccessMessageNotification from './SuccessMessageNotification';

export default {
  title: 'Components/SuccessMessageNotification',
  component: SuccessMessageNotification,
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
    <SuccessMessageNotification
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
  message: 'Operation completed successfully!',
  isVisible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  message: 'Operation completed successfully!',
  isVisible: false,
};