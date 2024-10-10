import React from 'react';
import InlineErrorNotification from './InlineErrorNotification';

export default {
  title: 'Components/InlineErrorNotification',
  component: InlineErrorNotification,
  argTypes: {
    message: { control: 'text' },
    isVisible: { control: 'boolean' },
  },
};

const Template = (args) => <InlineErrorNotification {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'This is an error message.',
  isVisible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  message: 'This message should not be visible.',
  isVisible: false,
};