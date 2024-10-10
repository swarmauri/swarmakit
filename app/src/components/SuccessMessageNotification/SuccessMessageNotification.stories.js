import React from 'react';
import SuccessMessageNotification from './SuccessMessageNotification';

export default {
  title: 'Components/SuccessMessageNotification',
  component: SuccessMessageNotification,
  argTypes: {
    message: { control: 'text' },
    isVisible: { control: 'boolean' },
    onClose: { action: 'closed' },
  },
};

const Template = (args) => <SuccessMessageNotification {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'Your action was successful!',
  isVisible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  message: 'This notification should not be visible.',
  isVisible: false,
};