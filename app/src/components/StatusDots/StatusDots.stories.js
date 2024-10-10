import React from 'react';
import StatusDots from './StatusDots';

export default {
  title: 'Indicators/StatusDots',
  component: StatusDots,
};

const Template = (args) => <StatusDots {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: 'offline',
};

export const Online = Template.bind({});
Online.args = {
  status: 'online',
};

export const Offline = Template.bind({});
Offline.args = {
  status: 'offline',
};

export const Busy = Template.bind({});
Busy.args = {
  status: 'busy',
};

export const Idle = Template.bind({});
Idle.args = {
  status: 'idle',
};