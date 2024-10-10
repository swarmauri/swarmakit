/** @jsx js */
import React from 'react';
import InlineErrorNotification from './InlineErrorNotification';

export default {
  title: 'Components/InlineErrorNotification',
  component: InlineErrorNotification,
  parameters: {
    layout: 'centered',
    viewport: {
      defaultViewport: 'responsive',
    },
  },
  argTypes: {
    message: { control: 'text' },
    isVisible: { control: 'boolean' },
  },
};

const Template = (args) => <InlineErrorNotification {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'This is an error message',
  isVisible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  message: 'This is an error message',
  isVisible: false,
};