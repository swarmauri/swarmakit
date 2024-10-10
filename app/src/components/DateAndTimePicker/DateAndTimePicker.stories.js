import React from 'react';
import DateAndTimePicker from './DateAndTimePicker';

export default {
  title: 'Forms/DateAndTimePicker',
  component: DateAndTimePicker,
  argTypes: {
    onDateChange: { action: 'date selected' },
    onTimeChange: { action: 'time selected' },
  },
};

const Template = (args) => <DateAndTimePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedDate: '',
  selectedTime: '',
  disabled: false,
};

export const DateSelected = Template.bind({});
DateSelected.args = {
  selectedDate: '2023-10-01',
  selectedTime: '',
  disabled: false,
};

export const TimeSelected = Template.bind({});
TimeSelected.args = {
  selectedDate: '',
  selectedTime: '12:00',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  selectedDate: '2023-10-01',
  selectedTime: '12:00',
  disabled: true,
};