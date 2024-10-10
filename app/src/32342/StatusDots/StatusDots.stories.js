import React from 'react';
import StatusDots from './StatusDots';

export default {
  title: 'Indicators/StatusDots',
  component: StatusDots,
};

const Template = (args) => <StatusDots {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: 'Offline',
};

export const Online = Template.bind({});
Online.args = {
  status: 'Online',
};

export const Offline = Template.bind({});
Offline.args = {
  status: 'Offline',
};

export const Busy = Template.bind({});
Busy.args = {
  status: 'Busy',
};

export const Idle = Template.bind({});
Idle.args = {
  status: 'Idle',
};