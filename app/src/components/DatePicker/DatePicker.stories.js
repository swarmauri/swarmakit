import React, { useState } from 'react';
import DatePicker from './DatePicker';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
};

const Template = (args) => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <DatePicker
      {...args}
      selectedDate={selectedDate}
      onChange={(newDate) => setSelectedDate(newDate)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};

export const WithMinMaxDate = Template.bind({});
WithMinMaxDate.args = {
  minDate: '2022-01-01',
  maxDate: '2023-12-31',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};