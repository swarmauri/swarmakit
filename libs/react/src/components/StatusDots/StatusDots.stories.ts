import React from 'react';
import { Meta, Story } from '@storybook/react';
import StatusDots from './StatusDots';

export default {
  title: 'component/Indicators/StatusDots',
  component: StatusDots,
  tags: ['autodocs'],
} as Meta;

const Template: Story<StatusDotsProps> = (args) => <StatusDots {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: 'online',
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