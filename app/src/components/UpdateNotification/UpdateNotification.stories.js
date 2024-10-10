import React from 'react';
import UpdateNotification from './UpdateNotification';

export default {
  title: 'Components/UpdateNotification',
  component: UpdateNotification,
  argTypes: {
    message: { control: 'text' },
    isVisible: { control: 'boolean' },
    onDismiss: { action: 'dismissed' },
  },
};

const Template = (args) => <UpdateNotification {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'A new update is available!',
  isVisible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  message: 'This notification should not be visible.',
  isVisible: false,
};