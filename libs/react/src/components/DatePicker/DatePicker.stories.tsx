import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import DatePicker from './DatePicker';

export default {
  title: 'component/Forms/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => {
  const [date, setDate] = useState(args.date);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  return <DatePicker {...args} date={date} onChange={handleChange} />;
};

export const SingleDate = Template.bind({});
SingleDate.args = {
  date: '2023-10-01',
  type: 'date',
  disabled: false,
};

export const DateRange = Template.bind({});
DateRange.args = {
  date: '2023-10-01T09:00',
  type: 'datetime-local',
  disabled: false,
};

export const TimePicker = Template.bind({});
TimePicker.args = {
  date: '2023-10-01T09:00',
  type: 'datetime-local',
  disabled: false,
};