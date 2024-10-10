// DateTimeStamp.stories.js
import React from 'react';
import DateTimeStamp from './DateTimeStamp';

export default {
  title: 'Chat/DateTimeStamp',
  component: DateTimeStamp,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <DateTimeStamp {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'displayed',
  timestamp: '2023-10-25 14:23:00',
};

export const Displayed = Template.bind({});
Displayed.args = {
  state: 'displayed',
  timestamp: '2023-10-25 14:23:00',
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
  timestamp: '2023-10-25 14:23:00',
};