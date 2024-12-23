import React from 'react';
import { Meta, Story } from '@storybook/react';
import DateTimeStamp, { DateTimeStampProps } from './DateTimeStamp';

export default {
  title: 'component/Chat/DateTimeStamp',
  component: DateTimeStamp,
  tags: ['autodocs'],
} as Meta;

const Template: Story<DateTimeStampProps> = (args) => <DateTimeStamp {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'displayed',
  dateTime: new Date().toLocaleString(),
};

export const Displayed = Template.bind({});
Displayed.args = {
  ...Default.args,
  state: 'displayed',
};

export const Hidden = Template.bind({});
Hidden.args = {
  ...Default.args,
  state: 'hidden',
};