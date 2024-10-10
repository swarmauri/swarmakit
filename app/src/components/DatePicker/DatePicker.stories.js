import React from 'react';
import DatePicker from './DatePicker';

export default {
  title: 'Forms/DatePicker',
  component: DatePicker,
  argTypes: {
    onSelect: { action: 'date selected' },
  },
};

const Template = (args) => <DatePicker {...args} />;

export const SingleDate = Template.bind({});
SingleDate.args = {
  type: 'single',
  selectedDate: '2023-10-01',
};

export const DateRange = Template.bind({});
DateRange.args = {
  type: 'range',
  selectedDate: '',
};

export const TimePicker = Template.bind({});
TimePicker.args = {
  type: 'time',
  selectedDate: '12:00',
};